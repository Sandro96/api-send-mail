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
    const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New Message</title>
        </head>
        <body style="margin:0;padding:0;background-color:#f4f4f7;font-family:Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f7;padding:40px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

                  <!-- Header -->
                  <tr>
                    <td style="background-color:#111827;padding:32px 40px;text-align:center;">
                      <h1 style="margin:0;color:#ffffff;font-size:22px;letter-spacing:0.5px;">📬 New Contact Message</h1>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="padding:36px 40px;">

                      <!-- Sender info -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;background-color:#f9fafb;border:1px solid #e5e7eb;border-radius:6px;">
                        <tr>
                          <td style="padding:20px 24px;">
                            <p style="margin:0 0 8px;font-size:13px;color:#6b7280;text-transform:uppercase;letter-spacing:0.6px;">From</p>
                            <p style="margin:0;font-size:16px;font-weight:bold;color:#111827;">${user_name}</p>
                            <p style="margin:4px 0 0;font-size:14px;color:#6b7280;">${user_email}</p>
                          </td>
                        </tr>
                      </table>

                      <!-- Subject -->
                      <p style="margin:0 0 6px;font-size:13px;color:#6b7280;text-transform:uppercase;letter-spacing:0.6px;">Subject</p>
                      <p style="margin:0 0 28px;font-size:17px;font-weight:bold;color:#111827;">${subject}</p>

                      <!-- Message -->
                      <p style="margin:0 0 10px;font-size:13px;color:#6b7280;text-transform:uppercase;letter-spacing:0.6px;">Message</p>
                      <div style="background-color:#f9fafb;border-left:4px solid #111827;border-radius:4px;padding:20px 24px;">
                        <p style="margin:0;font-size:15px;color:#374151;line-height:1.7;white-space:pre-wrap;">${message}</p>
                      </div>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color:#f9fafb;border-top:1px solid #e5e7eb;padding:20px 40px;text-align:center;">
                      <p style="margin:0;font-size:12px;color:#9ca3af;">This email was sent automatically. Please do not reply directly to this message.</p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    const data = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: subject,
      html,
    };

    const result = await rese.emails.send(data);

    res.status(200).json({ message: 'Email sent successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending the email.' });
  }
});

const PORT = process.env.PORT;

module.exports = app;