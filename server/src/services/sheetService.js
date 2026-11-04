import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = process.env.DATA_DIR || path.resolve(__dirname, '../../data');
const CSV_FILE = path.join(DATA_DIR, 'leads.csv');

const CSV_HEADERS = [
  'Timestamp',
  'Full Name',
  'Email',
  'Phone',
  'Company',
  'Role',
  'Industry',
  'Requirement',
  'SKU Volume',
  'Challenge',
  'IP Address',
];

function escapeCsv(val) {
  if (val == null) return '""';
  const str = String(val).replace(/"/g, '""');
  return `"${str}"`;
}

/**
 * Ensures the data directory and leads.csv file exist with headers.
 */
async function ensureCsvFile() {
  await fs.promises.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.promises.access(CSV_FILE);
  } catch {
    const headerRow = CSV_HEADERS.map((h) => `"${h}"`).join(',') + '\r\n';
    await fs.promises.writeFile(CSV_FILE, headerRow, 'utf8');
  }
}

/**
 * Appends a lead row to the local CSV spreadsheet.
 */
export async function appendToLocalCsv(lead, ip = '') {
  await ensureCsvFile();

  const timestamp = new Date().toISOString();
  const row = [
    timestamp,
    lead.fullName,
    lead.email,
    lead.phone,
    lead.company,
    lead.role,
    lead.industry,
    lead.requirement,
    lead.skuVolume || '',
    lead.challenge || '',
    ip,
  ]
    .map(escapeCsv)
    .join(',') + '\r\n';

  await fs.promises.appendFile(CSV_FILE, row, 'utf8');
  console.log(`[Sheet Service] Lead for "${lead.company}" appended to ${CSV_FILE}`);
  return CSV_FILE;
}

/**
 * Syncs the lead to an external Google Sheet if GOOGLE_SHEET_WEBHOOK_URL is set.
 * Uses Google Apps Script Web App / Webhook for instant, zero-credential Google Sheet logging.
 */
export async function syncToGoogleSheet(lead, ip = '') {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL?.trim();
  if (!webhookUrl) {
    return { synced: false, reason: 'GOOGLE_SHEET_WEBHOOK_URL_NOT_CONFIGURED' };
  }
  if (!/^https:\/\/script\.google\.com\/macros\/s\/[^/]+\/exec$/.test(webhookUrl)) {
    return { synced: false, reason: 'INVALID_GOOGLE_SHEET_WEBHOOK_URL' };
  }

  const payload = {
    timestamp: new Date().toLocaleString('en-US', { timeZone: process.env.TZ || 'Asia/Kolkata' }),
    fullName: lead.fullName,
    email: lead.email,
    phone: lead.phone,
    company: lead.company,
    role: lead.role,
    industry: lead.industry,
    requirement: lead.requirement,
    skuVolume: lead.skuVolume || '',
    challenge: lead.challenge || '',
    ip,
  };

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      redirect: 'follow',
      signal: AbortSignal.timeout(15000),
    });

    if (res.ok) {
      const result = await res.json();
      if (result.status !== 'success') {
        console.warn('[Sheet Service] Google Apps Script did not confirm the row was saved.');
        return { synced: false, reason: 'GOOGLE_SHEET_WRITE_FAILED' };
      }
      console.log('[Sheet Service] Successfully synced lead row to Google Sheet.');
      return { synced: true };
    } else {
      console.warn(`[Sheet Service] Google Sheet webhook responded with status ${res.status}`);
      return { synced: false, status: res.status };
    }
  } catch (err) {
    console.warn(`[Sheet Service] Could not connect to Google Sheet webhook: ${err.message}`);
    return { synced: false, error: err.message };
  }
}

/**
 * Unified helper: records the lead in both the local spreadsheet and live Google Sheet.
 */
export async function appendLeadToSheet(lead, ip = '') {
  const results = {};

  try {
    const localCsvEnabled = process.env.LOCAL_CSV_ENABLED === 'true' ||
      (process.env.LOCAL_CSV_ENABLED !== 'false' && process.env.NODE_ENV !== 'production');
    if (localCsvEnabled) results.localCsv = await appendToLocalCsv(lead, ip);
  } catch (err) {
    console.error(`[Sheet Service] Local CSV error: ${err.message}`);
  }

  try {
    results.googleSheet = await syncToGoogleSheet(lead, ip);
  } catch (err) {
    console.error(`[Sheet Service] Google Sheet sync error: ${err.message}`);
  }

  return results;
}

export function getCsvPath() {
  return CSV_FILE;
}

