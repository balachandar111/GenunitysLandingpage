/**
 * ==========================================================
 * GOOGLE APPS SCRIPT FOR GENUNITYS LEAD INTEGRATION
 * ==========================================================
 * How to use:
 * 1. Open Google Sheets (https://sheets.new)
 * 2. In the first row, add these headers in columns A through K:
 *    Timestamp | Full Name | Email | Phone | Company | Role | Industry | Requirement | SKU Volume | Challenge | IP Address
 * 3. In the top menu, click Extensions > Apps Script
 * 4. Replace any existing code with the script below.
 * 5. Click "Deploy" > "New deployment"
 * 6. Select type: "Web app"
 * 7. Configuration:
 *    - Description: "Genunitys Leads Webhook"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone" (allows your server to send leads)
 * 8. Click "Deploy", authorize permissions, and copy the Web App URL.
 * 9. Paste this URL into your server/.env file as:
 *    GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.fullName || '',
      data.email || '',
      data.phone || '',
      data.company || '',
      data.role || '',
      data.industry || '',
      data.requirement || '',
      data.skuVolume || '',
      data.challenge || '',
      data.ip || ''
    ]);

    return ContentService.createTextOutput(JSON.stringify({ status: 'success', message: 'Row added' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Genunitys Google Sheet Webhook is active.");
}

