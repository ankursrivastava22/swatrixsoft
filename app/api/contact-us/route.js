// app/api/contact-us/route.js

import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, subject, message } = await req.json();

  // Fixed receiver email (you can change this to your actual email)
  const receiverEmail = "your-receiver-email@example.com"; 

  // Create the transporter using your Gmail credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail', // You can change this to another email provider if needed
    auth: {
      user: process.env.EMAIL_USER, // Your email address (Gmail)
      pass: process.env.EMAIL_PASS, // Your email password (or App Password)
    },
  });

  const mailOptions = {
    from: email, // The sender's email address (from form)
    to: receiverEmail, // The receiver email (fixed address)
    subject: `New Contact Us Message: ${subject}`,
    text: `
      You have received a new message from ${name} (${email}):

      Message:
      ${message}
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send email. Please try again later.' }),
      { status: 500 }
    );
  }
}
