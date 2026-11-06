// Vercel serverless function: Contractual Control Alert signups.
// Emails each signup to the LandControl inbox over Hostinger SMTP.
// Env (Vercel → Settings → Environment Variables):
//   SMTP_USER  contact@landcontrol.co.uk
//   SMTP_PASS  the mailbox password
//   SMTP_HOST  optional, default smtp.hostinger.com
//   NOTIFY_TO  optional, default SMTP_USER
import nodemailer from 'nodemailer';

const ROLES = ['Developer / housebuilder','Land promoter','Conveyancer / solicitor','Surveyor','Landowner','Lender / analyst / investor','Other'];
const clean = (v, n = 200) => String(v ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, n);

export default async function handler(req, res) {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ ok: false }); }
  const b = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  if (b.company) return res.status(200).json({ ok: true }); // honeypot
  const email = clean(b.email, 254).toLowerCase();
  const role = ROLES.includes(b.role) ? b.role : 'Other';
  const page = clean(b.page, 300);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return res.status(400).json({ ok: false, error: 'email' });
  const { SMTP_USER, SMTP_PASS, SMTP_HOST = 'smtp.hostinger.com', NOTIFY_TO } = process.env;
  if (!SMTP_USER || !SMTP_PASS) return res.status(503).json({ ok: false, error: 'not_configured' });
  try {
    const t = nodemailer.createTransport({ host: SMTP_HOST, port: 465, secure: true, auth: { user: SMTP_USER, pass: SMTP_PASS } });
    const when = new Date().toISOString();
    await t.sendMail({
      from: `LandControl <${SMTP_USER}>`, to: NOTIFY_TO || SMTP_USER, replyTo: email,
      subject: `New Contractual Control Alert signup: ${role}`,
      text: `Email: ${email}\nRole: ${role}\nPage: ${page}\nTime: ${when}\n`,
    });
    await t.sendMail({
      from: `LandControl <${SMTP_USER}>`, to: email,
      subject: 'You’re on the Contractual Control Alert',
      text: `Thanks for subscribing to the Contractual Control Alert.\n\nYou’ll hear from us when HM Land Registry or MHCLG changes anything that affects contractual control rights, plus a monthly round-up.\n\nWhile you wait:\n- The complete guide: https://landcontrol.co.uk/contractual-control-agreements/\n- Deadline calculator: https://landcontrol.co.uk/deadline-calculator/\n- Readiness checklist: https://landcontrol.co.uk/readiness-checklist/\n\nTo unsubscribe, reply with "unsubscribe".\n\nLandControl · independent, not affiliated with HM Land Registry or the UK Government\nhttps://landcontrol.co.uk`,
    });
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('subscribe failed', e?.message);
    return res.status(502).json({ ok: false, error: 'send' });
  }
}
