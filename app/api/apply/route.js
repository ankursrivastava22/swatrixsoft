import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: false, // we’ll parse FormData manually
  },
};

export async function POST(req) {
  try {
    // 1. extract fields + file from the FormData
    const formData = await req.formData();
    const email    = formData.get("email");
    const jobTitle = formData.get("jobTitle");
    const resume   = formData.get("resume"); // a File

    if (!email || !jobTitle || !resume) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing fields" }),
        { status: 400 }
      );
    }

    // 2. convert the uploaded File to a Buffer
    const arrayBuffer = await resume.arrayBuffer();
    const resumeBuffer = Buffer.from(arrayBuffer);

    // 3. configure your transporter (just like in your contact form)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // 4. send the email, attaching the resume
    await transporter.sendMail({
      from: `"Applicant" <${email}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Job Application: ${jobTitle}`,
      text: `
Applicant Email: ${email}
Position:       ${jobTitle}
      `,
      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer,
        },
      ],
    });

    return new Response(
      JSON.stringify({ success: true, message: "Application sent!" }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Apply API error:", err);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send application" }),
      { status: 500 }
    );
  }
}
