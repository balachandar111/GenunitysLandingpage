# Deploy Genunitys: Vercel client + Render API

## 1. Push the source to a Git repository

Render's native Node deployment needs a GitHub, GitLab, or Bitbucket repository.
This folder was not a Git checkout when the deployment changes were prepared.
Use a private repository if the source should not be public.

Commit source, package lockfiles, `render.yaml`, and the Vercel configurations.
Never commit `.env` files, `.local`, `.vercel`, `server/data`, or ZIP archives;
these are excluded by `.gitignore`. Keep `.env.example` files in the repository.

## 2. Deploy the server to Render

Use **New > Blueprint** and select the repository. Render reads `render.yaml`.
Alternatively, create a **Web Service** with these settings:

| Setting | Value |
| --- | --- |
| Runtime | Node |
| Root directory | `server` |
| Build command | `npm ci --omit=dev` |
| Start command | `npm start` |
| Health check path | `/api/health` |
| Node version | `22` |

Set environment variables in Render, not in the client:

| Variable | Value |
| --- | --- |
| `NODE_ENV` | `production` |
| `CLIENT_ORIGIN` | Exact Vercel origin, for example `https://YOUR-PROJECT.vercel.app` |
| `GOOGLE_SHEET_WEBHOOK_URL` | The deployed Apps Script URL from `server/.env`, ending in `/exec` |
| `ADMIN_API_KEY` | A long random secret; the Blueprint generates one |
| `LOCAL_CSV_ENABLED` | `false` |
| `SEND_CUSTOMER_CONFIRMATION` | `false` unless email is configured |
| `MONGODB_URI` | Optional remote MongoDB connection string; never use localhost on Render |

At least one external store must work: Google Sheets or MongoDB. The API returns
503 when neither saves a submitted lead, rather than claiming the enquiry was received.
The health endpoint checks that the server is running; it does not prove storage is working.

The Blueprint uses the free plan. Free Render services have ephemeral local
storage, can sleep when idle, and block SMTP ports 25, 465, and 587. Therefore local
CSV and Gmail SMTP are not a production storage/email solution on that plan.
To retain the existing Gmail notification feature, select a paid instance yourself
and configure `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`,
`NOTIFICATION_EMAIL`, and `EMAIL_FROM` from `server/.env.example`. SMTP credentials
must remain server-only. Alternatively, a future change can use an HTTPS email API.

Copy Render's actual service URL after deployment. Check:

```text
https://YOUR-SERVICE.onrender.com/api/health
```

## 3. Deploy the client to Vercel

The existing Vercel project is `genunitys`, linked at the repository root.
Keep its root directory as `.`. The root `vercel.json` installs/builds only the
client and publishes `client/dist`. The old Vercel API entry point was removed.

For a new Vercel project with root directory `client`, `client/vercel.json`
provides the equivalent settings and SPA route fallback.

In Vercel's project environment variables, set for Production (and Preview if used):

```env
VITE_API_URL=https://YOUR-SERVICE.onrender.com
```

Use only the backend origin: no `/api` suffix, credentials, query, or fragment.
Vite bakes this public value into the client bundle. Redeploy after changing it.
A Vercel build fails if this value is missing or malformed.

From the linked project root, the CLI flow is:

```sh
vercel env add VITE_API_URL production
vercel --prod
```

When the Vercel URL is known, set Render's `CLIENT_ORIGIN` to that exact origin.
For multiple domains, use a comma-separated list. Add custom domains and specific
preview URLs explicitly; the API does not allow every `vercel.app` origin.

## 4. Verify the deployment

1. Open the frontend and refresh `/privacy` and `/terms` directly.
2. Check the Render `/api/health` response.
3. Submit one clearly labeled test enquiry through the frontend.
4. Verify the new row in the intended Google Sheet or the MongoDB record.
5. Verify notification delivery separately if SMTP is configured on a paid plan.

Local verification commands:

```sh
npm test
npm run build
```

Tests use simulated external services and never write real leads or send email.
Local development still uses the Vite `/api` proxy and `server/.env`.

Provider references:
- https://render.com/docs/deploy-node-express-app
- https://render.com/docs/free
- https://vercel.com/docs/frameworks/frontend/vite
