function configured() {
  return Boolean(process.env.BREVO_PASS || process.env.BREVO_API_KEY);
}

async function sendCode({ to, subject, title, text, code }) {
  const apiKey = process.env.BREVO_PASS || process.env.BREVO_API_KEY;
  if (!apiKey) return false;

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
       sender: { 
       name: process.env.EMAIL_FROM_NAME || 'Bizly', 
      email: 'oreocon1litrodeleche@gmail.com' 
      },
        to: [{ email: to }],
        subject: subject,
        htmlContent: `
          <div style="font-family:Arial,sans-serif;max-width:520px;margin:0 auto;padding:28px;background:#f7f7fb;border-radius:12px">
            <h2 style="color:#2d1b69">${title}</h2>
            <p style="color:#555">${text}</p>
            <div style="background:#2d1b69;color:#fff;font-size:30px;font-weight:700;letter-spacing:8px;text-align:center;padding:18px;border-radius:8px">${code}</div>
            <p style="color:#888;font-size:12px;margin-top:20px">Si no solicitaste esta acción, puedes ignorar este mensaje.</p>
          </div>`
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('[Bizly][Error en API de Brevo]:', errorData);
      return false;
    }

    return true;
  } catch (error) {
    console.error('[Bizly][Error enviando correo con Brevo HTTP]:', error);
    return false;
  }
}

module.exports = { configured, sendCode };