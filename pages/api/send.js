import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    try {
      const data = await resend.emails.send({
        from: process.env.FROM_EMAIL, // Your verified Resend email address
        to: [process.env.FROM_EMAIL], // Sending email to yourself
        subject: subject,
        text: `From: ${email}\n\nMessage:\n${message}`,
      });

      console.log('Email sent successfully:', data);
      res.status(200).json({ message: 'Email sent successfully', data });
    } catch (error) {
      console.error('Error sending email with Resend:', error);
      res.status(500).json({ message: 'Error sending email', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
