# Genunitys – MERN Landing Page

AI-powered product authentication & customer engagement landing page.
All copy comes from `GENUNITYS_LP.docx`.

- **Frontend:** React 18 + Vite, React Router, lucide-react, modern light theme (#00bf15 + white)
- **Backend:** Node + Express, MongoDB (Mongoose), Nodemailer (Gmail SMTP), Google Sheets sync + local CSV spreadsheet, Zod validation, Helmet, CORS, rate-limiting
- **Lead form** → `POST /api/leads` → sends email via Gmail SMTP + logs to Google Sheet / CSV spreadsheet + saves in MongoDB

## Quick start

Prerequisites: Node 18+, MongoDB (optional for local testing; form saves to Sheet & sends emails even if DB is offline).

```bash
npm run install:all                 # installs root, client and server deps
cp server/.env.example server/.env  # configure SMTP and Sheet webhook
npm run dev                         # API on :5000, site on http://localhost:5173 / :5174
```

## Gmail SMTP Configuration

To receive demo form submissions directly in your Gmail:

1. Open your Google Account at [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Generate a 16-character **App Password** for "Mail".
3. In `server/.env`, set:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_SECURE=true
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-char-app-password
   NOTIFICATION_EMAIL=your-recipient-email@gmail.com
   EMAIL_FROM="Genunitys Demo Desk" <your-email@gmail.com>
   SEND_CUSTOMER_CONFIRMATION=true   # optional: sends thank-you email to lead
   ```

## Sheet Integration

Demo leads can be saved to the following spreadsheet destinations:

1. **Local Spreadsheet (`server/data/leads.csv`)**:
   - Enabled by default in local development; disabled by default in production.
   - Open anytime in Excel, Google Sheets, or Numbers.
   - Admin export endpoint: `GET /api/leads/export/csv` (requires `x-admin-key` header).

2. **Live Google Sheet Sync (Google Apps Script Webhook)**:
   - Create a Google Sheet at [https://sheets.new](https://sheets.new)
   - Add column headers in Row 1: `Timestamp, Full Name, Email, Phone, Company, Role, Industry, Requirement, SKU Volume, Challenge, IP Address`
   - Click **Extensions > Apps Script** and paste the code from [googleSheetScript.js](server/scripts/googleSheetScript.js).
   - Click **Deploy > New deployment > Web app** (set access to "Anyone").
   - Copy the Web app URL and paste it in `server/.env`:
     ```env
     GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
     ```

## Production: Vercel + Render

See [DEPLOYMENT.md](DEPLOYMENT.md) for the complete setup and environment variables.

- Vercel hosts the React client. Set `VITE_API_URL` to the Render service origin.
- Render runs the Express API using [render.yaml](render.yaml). Set `CLIENT_ORIGIN`
  to the Vercel origin and configure the Google Sheets webhook or remote MongoDB.
- Local CSV is a development backup, disabled by default in production. Free
  Render storage is ephemeral, and free instances cannot use Gmail SMTP ports.
- The API confirms a production enquiry only after Google Sheets or MongoDB saves it.

Run `npm test` to check API behavior and `npm run build` to build `client/dist`.

## Structure

```
client/src
  data/content.js       ← ALL page text (edit copy here)
  index.css             ← light theme tokens (#00bf15, white, borders, radius)
  components/           ← Hero (with scan product animation & genuine popup),
                          Problem, Intro, HowItWorks, Solutions, Industries,
                          FeatureGrid, UseCase, Who, Demo, FAQ, LeadForm,
                          FinalCTA, Navbar, Footer
  pages/Home.jsx        ← section order
server/src
  models/Lead.js        ← lead schema + dropdown enums
  routes/leads.js       ← POST (public), GET, PATCH, CSV export
  services/
    emailService.js     ← Gmail SMTP notifications & customer acknowledgments
    sheetService.js     ← Google Sheet webhook sync & local leads.csv recorder
  scripts/
    googleSheetScript.js← Ready-to-paste Google Apps Script code
```
