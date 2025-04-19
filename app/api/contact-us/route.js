import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, phone, company, subject, message } = await req.json();

    const receiverEmail = "ankurdevops22@gmail.com";

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `New Contact Request: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>This email was sent from the Swatrixsoft contact form.</small></p>
      `,
      text: `
        New Contact Form Submission

        Name: ${name}
        Email: ${email}
        ${phone ? `Phone: ${phone}\n` : ''}
        ${company ? `Company: ${company}\n` : ''}
        Subject: ${subject}

        Message:
        ${message}

        This email was sent from the Swatrixsoft contact form.
      `
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Thank you for your message. We will get back to you soon!' 
      }), 
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Unable to send message. Please try again later.' 
      }), 
      { status: 500 }
    );
  }
}