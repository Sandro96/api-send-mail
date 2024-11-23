const express = require('express');
const app = express();
const resend = require('resend');
const Resend = resend.Resend;
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Express on Vercel!!'));

const rese = new Resend(process.env.RESEND_API_KEY);

app.post('/api/send-email', async (req, res) => {
  const { user_name, user_email, subject, message } = req.body;

  try {
    const data = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: subject,
      text: `Mensaje de ${user_name}: ${message}`,
    };
    
    const result = await rese.emails.send(data);

    res.status(200).json({ message: 'Email enviado con éxito.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al enviar el correo.' });
  }
});

const PORT = process.env.PORT;

module.exports = app;