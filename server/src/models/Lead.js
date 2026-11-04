import mongoose from 'mongoose';

export const ROLES = [
  'Business Owner / Founder',
  'Director / Senior Management',
  'Brand Protection / Security',
  'Marketing',
  'Quality / Compliance',
  'Operations / Supply Chain',
  'IT / Technology',
  'Procurement',
  'Other',
];

export const INDUSTRIES = [
  'FMCG / Food',
  'Pharmaceuticals / Healthcare',
  'Electronics / Appliances',
  'Textile / Apparel',
  'Beauty / Personal Care',
  'Beverages',
  'Automotive / Spare Parts',
  'Chemicals / Industrial Products',
  'Agriculture / Agro',
  'Retail / Distribution',
  'Other',
];

export const REQUIREMENTS = [
  'Product Authentication',
  'Anti-Counterfeit Monitoring',
  'QR Code Verification',
  'Scan Analytics',
  'Customer Engagement / Rewards',
  'Product Identification / Traceability',
  'System Integration',
  'Multiple Requirements',
  'Other',
];

export const SKU_VOLUMES = [
  'Under 1,000 SKUs',
  '1,000–10,000 SKUs',
  'More than 10,000 SKUs',
  'Not sure / Need guidance',
];

const leadSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true, maxlength: 120 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 200 },
    phone: { type: String, required: true, trim: true, maxlength: 30 },
    company: { type: String, required: true, trim: true, maxlength: 160 },
    role: { type: String, required: true, enum: ROLES },
    industry: { type: String, required: true, enum: INDUSTRIES },
    requirement: { type: String, required: true, enum: REQUIREMENTS },
    skuVolume: { type: String, enum: [...SKU_VOLUMES, ''], default: '' },
    challenge: { type: String, trim: true, maxlength: 2000, default: '' },
    status: { type: String, enum: ['new', 'contacted', 'qualified', 'closed'], default: 'new' },
    meta: {
      ip: String,
      userAgent: String,
    },
  },
  { timestamps: true }
);

leadSchema.index({ createdAt: -1 });
leadSchema.index({ email: 1 });

export default mongoose.model('Lead', leadSchema);
