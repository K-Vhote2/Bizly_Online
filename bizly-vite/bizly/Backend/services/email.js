const nodemailer = require('nodemailer');

function configured() {
  return Boolean(process.env.BREVO_USER && process.env.BREVO_PASS);
}

function transporter() {
  if (!configured()) return null;
  return nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.BREVO_USER,
      pass: process.env.BREVO_PASS,
    },
  });
}

async function sendCode({ to, subject, title, text, code }) {
  const tx = transporter();
  if (!tx) return false;

  try {
    await tx.sendMail({
      from: `"${process.env.EMAIL_FROM_NAME || 'Bizly'}" <${process.env.BREVO_USER}>`,
      to,
      subject,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:520px;margin:0 auto;padding:28px;background:#f7f7fb;border-radius:12px">
          <h2 style="color:#2d1b69">${title}</h2>
          <p style="color:#555">${text}</p>
          <div style="background:#2d1b69;color:#fff;font-size:30px;font-weight:700;letter-spacing:8px;text-align:center;padding:18px;border-radius:8px">${code}</div>
          <p style="color:#888;font-size:12px;margin-top:20px">Si no solicitaste esta acción, puedes ignorar este mensaje.</p>
        </div>`,
    });
    return true;
  } catch (error) {
    console.error('[Bizly][Error enviando correo con Brevo]:', error);
    return false;
  }
}

module.exports = { configured, sendCode };