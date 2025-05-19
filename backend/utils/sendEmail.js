// Función para enviar correos
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', // o cualquier otro proveedor
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

exports.sendConfirmationEmail = async (to, token) => {
  const url = `https://tu-app.com/confirm/${token}`;
  await transporter.sendMail({
    to,
    subject: 'Confirma tu cuenta',
    html: `<p>Haz clic para confirmar: <a href="${url}">${url}</a></p>`,
  });
};

exports.sendPasswordResetEmail = async (to, token) => {
  const url = `https://tu-app.com/reset-password/${token}`;
  await transporter.sendMail({
    to,
    subject: 'Recupera tu contraseña',
    html: `<p>Haz clic para recuperar: <a href="${url}">${url}</a></p>`,
  });
};
