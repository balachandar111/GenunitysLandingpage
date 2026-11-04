import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../.env') });
dotenv.config();

// Load environment variables before app.js reads the CORS configuration.
const { default: app } = await import('./app.js');
import { connectDB } from './config/db.js';

const PORT = process.env.PORT || 5000;
connectDB()
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.warn('MongoDB connection warning (running without active DB):', err.message);
  })
  .finally(() => {
    app.listen(PORT, '0.0.0.0', () => console.log(`API listening on port ${PORT}`));
  });
