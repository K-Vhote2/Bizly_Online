const SibApiV3Sdk = require('@getbrevo/brevo');

function configured() {
  return Boolean(process.env.BREVO_PASS);
}

async function sendCode({ to, subject, title, text, code }) {
  if (!configured()) return false;

  try {
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    
    // Configurar autenticación por API Key usando BREVO_PASS
    apiInstance.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_PASS);

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.subject = subject;
    sendSmtpEmail.sender = { 
      name: process.env.EMAIL_FROM_NAME || 'Bizly', 
      email: process.env.BREVO_USER || 'b82ac9001@smtp-brevo.com' 
    };
    sendSmtpEmail.to = [{ email: to }];
    
    sendSmtpEmail.htmlContent = `
      <div style="font-family:Arial,sans-serif;max-width:520px;margin:0 auto;padding:28px;background:#f7f7fb;border-radius:12px">
        <h2 style="color:#2d1b69">${title}</h2>
        <p style="color:#555">${text}</p>
        <div style="background:#2d1b69;color:#fff;font-size:30px;font-weight:700;letter-spacing:8px;text-align:center;padding:18px;border-radius:8px">${code}</div>
        <p style="color:#888;font-size:12px;margin-top:20px">Si no solicitaste esta acción, puedes ignorar este mensaje.</p>
      </div>`;

    await apiInstance.sendTransacEmail(sendSmtpEmail);
    return true;
  } catch (error) {
    console.error('[Bizly][Error enviando correo con Brevo API]:', error);
    return false;
  }
}

module.exports = { configured, sendCode };