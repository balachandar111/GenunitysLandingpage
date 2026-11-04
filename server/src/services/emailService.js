import nodemailer from 'nodemailer';

/**
 * Creates and returns the nodemailer transporter using Gmail SMTP settings.
 * Defaults to smtp.gmail.com on port 465 (SSL) or 587 (TLS).
 */
export function getTransporter() {
  const user = process.env.SMTP_USER?.trim();
  const rawPass = process.env.SMTP_PASS?.trim();

  if (!user || !rawPass) {
    return null;
  }

  // Google displays app passwords in groups; SMTP expects the spaces removed.
  const pass = rawPass.replace(/\s+/g, '');

  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const isSecure = process.env.SMTP_SECURE === 'true' || port === 465;

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST?.trim() || 'smtp.gmail.com',
    port,
    secure: isSecure,
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
    auth: {
      user,
      pass,
    },
  });
}

/**
 * Sends lead details to the admin/team Gmail using SMTP.
 */
export async function sendLeadNotification(lead, ip = '') {
  const transporter = getTransporter();

  if (!transporter) {
    console.warn(
      '[Email Service] SMTP is not configured. Set SMTP_USER and SMTP_PASS in server/.env to send lead emails to Gmail.'
    );
    return { success: false, reason: 'SMTP_NOT_CONFIGURED' };
  }

  const recipient =
    (process.env.NOTIFICATION_EMAIL && process.env.NOTIFICATION_EMAIL.trim()) ||
    (process.env.EMAIL_TO && process.env.EMAIL_TO.trim()) ||
    process.env.SMTP_USER?.trim();

  const sender =
    (process.env.EMAIL_FROM && process.env.EMAIL_FROM.trim()) ||
    `"Genunitys Demo Desk" <${process.env.SMTP_USER?.trim()}>`;

  const timestamp = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'long',
    timeZone: process.env.APP_TIMEZONE?.trim() || 'Asia/Kolkata',
  });

  const subject = `🎯 New Demo Request: ${lead.fullName} (${lead.company}) - Genunitys`;

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7faf7; margin: 0; padding: 24px; color: #0f172a; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid rgba(0, 191, 21, 0.2); overflow: hidden; box-shadow: 0 10px 30px rgba(0, 191, 21, 0.08); }
    .header { background: linear-gradient(135deg, #00bf15 0%, #009610 100%); padding: 28px 24px; text-align: center; color: #ffffff; }
    .header h1 { margin: 0 0 6px; font-size: 22px; font-weight: 700; }
    .header p { margin: 0; font-size: 14px; opacity: 0.95; }
    .content { padding: 28px 24px; }
    .badge { display: inline-block; background: rgba(0, 191, 21, 0.12); color: #00870f; font-weight: 700; font-size: 12px; padding: 4px 12px; border-radius: 999px; margin-bottom: 20px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    th, td { padding: 12px 14px; text-align: left; font-size: 14px; border-bottom: 1px solid #e5ece6; }
    th { width: 36%; color: #64748b; font-weight: 600; background: #fbfdfb; }
    td { color: #0f172a; font-weight: 500; }
    .highlight { color: #00870f; font-weight: 700; }
    .challenge-box { background: #f7faf7; border-left: 4px solid #00bf15; padding: 14px 16px; border-radius: 0 8px 8px 0; margin-bottom: 24px; font-size: 14px; line-height: 1.5; color: #334155; }
    .btn { display: inline-block; background: #00bf15; color: #ffffff !important; padding: 12px 26px; border-radius: 999px; text-decoration: none; font-weight: 600; font-size: 14px; }
    .footer { padding: 20px 24px; background: #f7faf7; border-top: 1px solid #e5ece6; text-align: center; font-size: 12px; color: #64748b; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Demo Request Received</h1>
      <p>A prospect submitted the Genunitys product demo form</p>
    </div>
    <div class="content">
      <span class="badge">✓ VERIFIED LEAD SUBMISSION</span>
      <table>
        <tr>
          <th>Full Name</th>
          <td><strong>${lead.fullName}</strong></td>
        </tr>
        <tr>
          <th>Email Address</th>
          <td><a href="mailto:${lead.email}" style="color: #00870f; text-decoration: none;">${lead.email}</a></td>
        </tr>
        <tr>
          <th>Phone Number</th>
          <td><a href="tel:${lead.phone}" style="color: #00870f; text-decoration: none;">${lead.phone}</a></td>
        </tr>
        <tr>
          <th>Company / Brand</th>
          <td class="highlight">${lead.company}</td>
        </tr>
        <tr>
          <th>Role / Title</th>
          <td>${lead.role}</td>
        </tr>
        <tr>
          <th>Industry</th>
          <td>${lead.industry}</td>
        </tr>
        <tr>
          <th>Primary Requirement</th>
          <td><strong>${lead.requirement}</strong></td>
        </tr>
        <tr>
          <th>Estimated SKU Volume</th>
          <td>${lead.skuVolume || 'Not specified'}</td>
        </tr>
        <tr>
          <th>Submission Time</th>
          <td>${timestamp}</td>
        </tr>
        ${ip ? `<tr><th>Client IP</th><td>${ip}</td></tr>` : ''}
      </table>

      ${
        lead.challenge
          ? `
        <div style="font-weight: 600; font-size: 13px; color: #475569; margin-bottom: 6px;">Current Brand Protection Challenge:</div>
        <div class="challenge-box">${lead.challenge}</div>
      `
          : ''
      }

      <div style="text-align: center; margin-top: 24px;">
        <a href="mailto:${lead.email}?subject=Genunitys%20Product%20Demo%20Follow-up%20for%20${encodeURIComponent(
    lead.company
  )}" class="btn">
          Reply Directly to ${lead.fullName}
        </a>
      </div>
    </div>
    <div class="footer">
      Genunitys · AI-Powered Product Authentication & Customer Engagement<br>
      Automated Notification Engine
    </div>
  </div>
</body>
</html>
`;

  const textContent = `
NEW GENUNITYS DEMO REQUEST

- Full Name: ${lead.fullName}
- Email: ${lead.email}
- Phone: ${lead.phone}
- Company: ${lead.company}
- Role: ${lead.role}
- Industry: ${lead.industry}
- Primary Requirement: ${lead.requirement}
- Estimated SKU Volume: ${lead.skuVolume || 'Not specified'}
- Challenge: ${lead.challenge || 'None provided'}
- Time: ${timestamp}
- IP: ${ip}
`;

  try {
    const info = await transporter.sendMail({
      from: sender,
      to: recipient,
      replyTo: lead.email,
      subject,
      text: textContent,
      html: htmlContent,
    });

    console.log(`[Email Service] Demo details sent to ${recipient} (Message ID: ${info.messageId})`);
    return { success: true, messageId: info.messageId };
  } catch (err) {
    console.error(`[Email Service] Failed to send email via SMTP:`, err.message);
    return { success: false, error: err.message };
  }
}

/**
 * Optional: Sends an automatic confirmation email to the customer.
 */
export async function sendCustomerConfirmation(lead) {
  const transporter = getTransporter();
  if (!transporter) return;

  const sender =
    (process.env.EMAIL_FROM && process.env.EMAIL_FROM.trim()) ||
    `"Genunitys" <${process.env.SMTP_USER?.trim()}>`;

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f7faf7; margin: 0; padding: 24px; color: #0f172a; }
    .container { max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid rgba(0, 191, 21, 0.2); overflow: hidden; }
    .header { background: linear-gradient(135deg, #00bf15 0%, #009610 100%); padding: 24px; text-align: center; color: #ffffff; }
    .content { padding: 28px 24px; font-size: 15px; line-height: 1.6; color: #334155; }
    .highlight { color: #00870f; font-weight: 700; }
    .footer { padding: 18px 24px; background: #f7faf7; font-size: 12px; color: #64748b; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0; font-size: 20px;">Thank You for Reaching Out to Genunitys</h2>
    </div>
    <div class="content">
      <p>Hi <strong>${lead.fullName}</strong>,</p>
      <p>Thank you for requesting a product demo for <strong class="highlight">${lead.company}</strong>.</p>
      <p>Our brand protection and product authentication specialists have received your request regarding <strong>${lead.requirement}</strong>. We will review your requirements and reach out to you within 24 business hours to schedule your personalized walkthrough.</p>
      <p>If you have any immediate questions, feel free to reply directly to this email.</p>
      <p style="margin-top: 24px;">Warm regards,<br><strong>The Genunitys Team</strong><br><span style="font-size: 13px; color: #64748b;">Powered by Bling Tech Connect OPC Pvt. Ltd.</span></p>
    </div>
    <div class="footer">
      © ${new Date().getFullYear()} Genunitys. All rights reserved.
    </div>
  </div>
</body>
</html>
`;

  try {
    await transporter.sendMail({
      from: sender,
      to: lead.email,
      subject: `We've Received Your Genunitys Demo Request - ${lead.company}`,
      html: htmlContent,
      text: `Hi ${lead.fullName},\n\nThank you for requesting a product demo for ${lead.company}. Our brand protection specialist will review your requirements and contact you shortly.\n\nBest regards,\nThe Genunitys Team`,
    });
    console.log(`[Email Service] Confirmation sent to customer ${lead.email}`);
  } catch (err) {
    console.warn(`[Email Service] Failed to send customer confirmation: ${err.message}`);
  }
}
