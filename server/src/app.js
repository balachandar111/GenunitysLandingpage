import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { connectDB } from './config/db.js';
import leadRoutes from './routes/leads.js';

const app = express();

app.set('trust proxy', 1);
app.use(helmet({ contentSecurityPolicy: false }));
const allowedOrigins = (process.env.CLIENT_ORIGIN || 'http://localhost:5173,http://localhost:5174')
  .split(',').map((origin) => origin.trim().replace(/\/+$/, '')).filter(Boolean);
app.use(cors({ origin: allowedOrigins }));
app.use(express.json({ limit: '20kb' }));
if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'));

app.get('/api/health', (_req, res) => res.json({ status: 'ok', time: new Date().toISOString() }));

app.use(
  '/api/leads',
  async (_req, res, next) => {
    if (process.env.MONGODB_URI) {
      try {
        await connectDB();
      } catch (err) {
        // Continue even if DB is temporarily offline; lead will be recorded in Sheet & emailed via SMTP
        console.warn('[Database] MongoDB connection error, proceeding with Sheet and SMTP services.');
      }
    }
    next();
  },
  leadRoutes
);

app.use('/api', (_req, res) => res.status(404).json({ success: false, message: 'Not found' }));

// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
});

export default app;
