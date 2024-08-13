// pages/api/send.js

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, subject, message } = req.body;

    // Create a transporter object with your email service credentials
    let transporter = nodemailer.createTransport({
      service: "Gmail", // or your preferred email service
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    try {
      // Send mail with defined transport object
      await transporter.sendMail({
        from: `"Contact Form" <${email}>`, // Sender address
        to: process.env.EMAIL_USER, // Send the email to your email address
        subject: subject, // Subject line
        text: message, // Plain text body
      });

      // Return a success response
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      // Return an error response
      res.status(500).json({ message: "Error sending email", error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
