const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_EMAIL_ID,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const send = async (to, subject, body) => {
  const emailOptions = {
    from: process.env.GMAIL_EMAIL_ID,
    to,
    subject,
    text: body,
  };

  try {
    await transporter.sendMail(emailOptions);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error(`Failed to send email to ${to}:`, error);
    throw error;
  }
};

// ❌ You had `module.export` instead of `module.exports`
module.exports = { send };
