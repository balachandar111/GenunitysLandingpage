# Genunitys deployment

The client and Express API run together in the Vercel project `genunitys`.

- Website: https://genunitys.vercel.app
- API health: https://genunitys.vercel.app/api/health
- Form endpoint: `POST /api/leads`
- Source: https://github.com/balachandar111/GenunitysLandingpage

## Vercel settings

Deploy from the repository root (`.`), not `client`.
The root `vercel.json` installs the client and server dependencies, builds
`client/dist`, routes `/api/*` to `api/index.mjs`, and serves React routes through
`index.html`. The API exports the Express app without starting its own listener.
Node 22 is pinned in the package files; the function has a 60-second limit.

Set these environment variables for Production in the Vercel project:

| Variable | Purpose |
| --- | --- |
| `VITE_API_URL` | `https://genunitys.vercel.app`, or empty for relative same-site requests |
| `NODE_ENV` | `production` |
| `CLIENT_ORIGIN` | Comma-separated approved frontend origins |
| `GOOGLE_SHEET_WEBHOOK_URL` | Deployed Apps Script URL ending in `/exec` |
| `ADMIN_API_KEY` | Private admin access secret |
| `LOCAL_CSV_ENABLED` | `false`; serverless storage is not durable |
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `465` |
| `SMTP_SECURE` | `true` |
| `SMTP_USER` | Gmail / Google Workspace SMTP account |
| `SMTP_PASS` | Google app password, stored only in Vercel secrets |
| `NOTIFICATION_EMAIL` | Team destination; when absent, the code falls back to `SMTP_USER` |
| `EMAIL_FROM` | Display name and sender address supported by the SMTP account |
| `SEND_CUSTOMER_CONFIRMATION` | `false`, unless customer acknowledgements are wanted |
| `MONGODB_URI` | Optional remote MongoDB URI; never use localhost in production |

Only `VITE_API_URL` belongs in the public frontend bundle. All mail credentials,
webhook URLs, and admin keys are server-only. Do not commit `.env` files, `.local`,
`.vercel`, `server/data`, or archives. Redeploy after environment changes.

```sh
vercel --prod
```

Vercel supports SMTP connections on port 465. Both the notification and optional
customer confirmation are awaited before the API responds so a serverless request
cannot finish while email sending is still pending. SMTP connections have bounded
timeouts. A saved enquiry stays successful if email delivery fails; inspect runtime
logs to diagnose email errors. Gmail may rewrite a sender that is not an approved
send-as address for the authenticated account.

## Verification

```sh
npm test
npm run build
```

Automated tests mock SMTP, Google Sheets, and database writes; they do not contact
customers. After a production deployment, check `/api/health`, refresh `/privacy`
and `/terms`, submit one labelled test enquiry, verify the Google Sheet row, and
check the SMTP result in Vercel logs and the destination mailbox.

## Local development

Use `server/.env` for local server settings and run `npm run dev` from the root.
Leave `client/.env`'s `VITE_API_URL` empty to use Vite's localhost API proxy.
Local CSV is enabled by default in development, but not production.

## Optional Render backend

The existing `render.yaml` still supports deploying the server separately to Render.
Its root directory is `server`, build command is `npm ci --omit=dev`, start command
is `npm start`, and health path is `/api/health`. For split hosting, use the frontend
configuration in `client/vercel.json`, point `VITE_API_URL` at the Render origin,
and set Render's `CLIENT_ORIGIN` to the frontend origin.

The previous Render service remains available, but the Vercel client no longer uses
it after this migration. No Render paid-plan upgrade is required for this setup.
Render's free plan cannot send Gmail SMTP traffic on ports 465 or 587.

References:
- https://vercel.com/kb/guide/serverless-functions-and-smtp
- https://vercel.com/docs/functions/configuring-functions/duration
- https://render.com/docs/free
