import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { once } from 'node:events';

// No real Sheets, MongoDB, or SMTP traffic in these tests.
process.env.NODE_ENV = 'production';
process.env.CLIENT_ORIGIN = ' https://genunitys.example/ , https://preview.example ';
process.env.LOCAL_CSV_ENABLED = 'false';
delete process.env.MONGODB_URI;
delete process.env.GOOGLE_SHEET_WEBHOOK_URL;
delete process.env.SMTP_USER;
delete process.env.SMTP_PASS;

const { default: app } = await import('../src/app.js');
const { syncToGoogleSheet } = await import('../src/services/sheetService.js');
const { default: mongoose } = await import('mongoose');
const { default: Lead } = await import('../src/models/Lead.js');
const server = app.listen(0, '127.0.0.1');
await once(server, 'listening');
const origin = `http://127.0.0.1:${server.address().port}`;
const realFetch = globalThis.fetch;
const lead = {
  fullName: 'Deployment Test', email: 'deployment@example.com', phone: '+1 202 555 0100',
  company: 'Test Company', role: 'Other', industry: 'Other', requirement: 'Other',
};
const postLead = (payload = lead) => realFetch(`${origin}/api/leads`, {
  method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload),
});
after(() => new Promise((resolve) => {
  globalThis.fetch = realFetch;
  server.closeAllConnections();
  server.close(resolve);
}));

test('health check works without a database', async () => {
  const response = await realFetch(`${origin}/api/health`);
  assert.equal(response.status, 200);
  assert.equal((await response.json()).status, 'ok');
});

test('CORS accepts configured origins after trimming, and excludes unknown origins', async () => {
  const allowed = await realFetch(`${origin}/api/leads`, {
    method: 'OPTIONS', headers: { Origin: 'https://genunitys.example', 'Access-Control-Request-Method': 'POST' },
  });
  assert.equal(allowed.status, 204);
  assert.equal(allowed.headers.get('access-control-allow-origin'), 'https://genunitys.example');
  const denied = await realFetch(`${origin}/api/health`, { headers: { Origin: 'https://unknown.example' } });
  assert.equal(denied.headers.get('access-control-allow-origin'), null);
});

test('invalid forms remain 400, and API-only hosting does not serve frontend routes', async () => {
  assert.equal((await postLead({})).status, 400);
  assert.equal((await realFetch(`${origin}/privacy`)).status, 404);
});

test('production rejects a lead when no durable storage is configured', async () => {
  const response = await postLead();
  assert.equal(response.status, 503);
  assert.equal((await response.json()).success, false);
});

test('Sheets HTTP 200 with an error or HTML never counts as saved', async () => {
  process.env.GOOGLE_SHEET_WEBHOOK_URL = 'https://script.google.com/macros/s/test/exec';
  try {
    for (const body of [JSON.stringify({ status: 'error' }), '<html>Sign in</html>']) {
      globalThis.fetch = async () => new Response(body, { status: 200 });
      const response = await postLead();
      assert.equal(response.status, 503);
    }
  } finally {
    globalThis.fetch = realFetch;
    delete process.env.GOOGLE_SHEET_WEBHOOK_URL;
  }
});

test('successful Sheets writes preserve form values and IP and return 201', async () => {
  process.env.GOOGLE_SHEET_WEBHOOK_URL = 'https://script.google.com/macros/s/test/exec';
  let sent;
  globalThis.fetch = async (url, options) => {
    assert.equal(url, process.env.GOOGLE_SHEET_WEBHOOK_URL);
    assert.ok(options.signal);
    sent = JSON.parse(options.body);
    return Response.json({ status: 'success', message: 'Row added' });
  };
  try {
    const response = await postLead();
    assert.equal(response.status, 201);
    assert.equal((await response.json()).success, true);
    assert.equal(sent.email, lead.email);
    assert.equal(sent.company, lead.company);
    assert.equal(sent.ip, '127.0.0.1');
  } finally {
    globalThis.fetch = realFetch;
    delete process.env.GOOGLE_SHEET_WEBHOOK_URL;
  }
});

test('a MongoDB save is sufficient when Sheets is not configured; DB failure is not', async () => {
  const previousState = mongoose.connection.readyState;
  const previousCreate = Lead.create;
  mongoose.connection.readyState = 1;
  try {
    Lead.create = async () => ({ _id: 'test' });
    assert.equal((await postLead()).status, 201);
    Lead.create = async () => { throw new Error('Simulated database failure'); };
    assert.equal((await postLead()).status, 503);
  } finally {
    Lead.create = previousCreate;
    mongoose.connection.readyState = previousState;
  }
});

test('a spreadsheet edit URL is rejected before any webhook request', async () => {
  process.env.GOOGLE_SHEET_WEBHOOK_URL = 'https://docs.google.com/spreadsheets/d/test/edit';
  globalThis.fetch = async () => { assert.fail('Must not call an invalid webhook URL'); };
  try {
    assert.deepEqual(await syncToGoogleSheet(lead), { synced: false, reason: 'INVALID_GOOGLE_SHEET_WEBHOOK_URL' });
  } finally {
    globalThis.fetch = realFetch;
    delete process.env.GOOGLE_SHEET_WEBHOOK_URL;
  }
});
