import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { z } from 'zod';
import fs from 'fs';
import mongoose from 'mongoose';
import Lead, { ROLES, INDUSTRIES, REQUIREMENTS, SKU_VOLUMES } from '../models/Lead.js';
import { requireAdmin } from '../middleware/auth.js';
import { sendLeadNotification, sendCustomerConfirmation } from '../services/emailService.js';
import { appendLeadToSheet, getCsvPath } from '../services/sheetService.js';

const router = Router();

const submitLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many submissions. Please try again later.' },
});

const leadSchema = z.object({
  fullName: z.string().trim().min(2, 'Full name is required').max(120),
  email: z.string().trim().email('Enter a valid business email').max(200),
  phone: z
    .string()
    .trim()
    .regex(/^[+()\d\s-]{7,20}$/, 'Enter a valid contact number'),
  company: z.string().trim().min(2, 'Company / brand name is required').max(160),
  role: z.enum(ROLES, { errorMap: () => ({ message: 'Select your role' }) }),
  industry: z.enum(INDUSTRIES, { errorMap: () => ({ message: 'Select your industry' }) }),
  requirement: z.enum(REQUIREMENTS, { errorMap: () => ({ message: 'Select your primary requirement' }) }),
  skuVolume: z.union([z.enum(SKU_VOLUMES), z.literal('')]).optional(),
  challenge: z.string().trim().max(2000).optional(),
  website: z.string().optional(), // honeypot - must stay empty
});

// POST /api/leads  (public)
router.post('/', submitLimiter, async (req, res, next) => {
  try {
    const parsed = leadSchema.safeParse(req.body);
    if (!parsed.success) {
      const errors = {};
      parsed.error.issues.forEach((i) => {
        errors[i.path[0]] = i.message;
      });
      return res.status(400).json({ success: false, message: 'Please check the highlighted fields.', errors });
    }

    const { website, ...data } = parsed.data;
    // Honeypot tripped: pretend success so bots learn nothing.
    if (website) return res.status(201).json({ success: true });

    // 1. Save to MongoDB if connection is ready
    let savedToDatabase = false;
    if (mongoose.connection.readyState === 1) {
      try {
        await Lead.create({
          ...data,
          meta: { ip: req.ip, userAgent: req.get('user-agent') },
        });
        savedToDatabase = true;
      } catch (dbErr) {
        console.warn('[Database] MongoDB save error:', dbErr.message);
      }
    } else {
      console.log('[Database] MongoDB is offline; attempting sheet storage.');
    }

    // 2. Add details to Sheet (Local CSV spreadsheet & live Google Sheet webhook)
    const sheetResult = await appendLeadToSheet(data, req.ip);
    const savedLocally = process.env.NODE_ENV !== 'production' && Boolean(sheetResult.localCsv);
    if (!savedToDatabase && !sheetResult.googleSheet?.synced && !savedLocally) {
      console.warn('[Lead Storage] No confirmed write:', sheetResult.googleSheet?.reason || 'STORAGE_UNAVAILABLE');
      return res.status(503).json({
        success: false,
        message: 'We could not save your enquiry right now. Please try again shortly.',
        code: sheetResult.googleSheet?.reason || 'LEAD_STORAGE_UNAVAILABLE',
      });
    }

    // Finish email delivery before responding so serverless runtimes do not pause it.
    const notification = sendLeadNotification(data, req.ip).catch((emailErr) => {
      console.error('[Email Service] Failed to send email via SMTP:', emailErr.message);
    });

    const confirmation = process.env.SEND_CUSTOMER_CONFIRMATION === 'true'
      ? sendCustomerConfirmation(data).catch((confErr) => {
        console.error('[Email Service] Failed to send customer confirmation:', confErr.message);
      })
      : Promise.resolve();
    await Promise.all([notification, confirmation]);

    res.status(201).json({ success: true, message: 'Enquiry received' });
  } catch (err) {
    next(err);
  }
});

// GET /api/leads/export/csv  (admin only)
router.get('/export/csv', requireAdmin, async (req, res) => {
  const csvPath = getCsvPath();
  if (fs.existsSync(csvPath)) {
    res.download(csvPath, `genunitys-leads-${new Date().toISOString().slice(0, 10)}.csv`);
  } else {
    res.status(404).json({ success: false, message: 'No leads sheet found yet.' });
  }
});

// GET /api/leads  (admin only)
router.get('/', requireAdmin, async (req, res, next) => {
  try {
    const page = Math.max(parseInt(req.query.page) || 1, 1);
    const limit = Math.min(parseInt(req.query.limit) || 25, 100);
    const [items, total] = await Promise.all([
      Lead.find().sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit).lean(),
      Lead.countDocuments(),
    ]);
    res.json({ success: true, page, limit, total, items });
  } catch (err) {
    next(err);
  }
});

// PATCH /api/leads/:id/status  (admin only)
router.patch('/:id/status', requireAdmin, async (req, res, next) => {
  try {
    const status = z.enum(['new', 'contacted', 'qualified', 'closed']).safeParse(req.body.status);
    if (!status.success) return res.status(400).json({ success: false, message: 'Invalid status' });
    const lead = await Lead.findByIdAndUpdate(req.params.id, { status: status.data }, { new: true });
    if (!lead) return res.status(404).json({ success: false, message: 'Lead not found' });
    res.json({ success: true, lead });
  } catch (err) {
    next(err);
  }
});

export default router;
