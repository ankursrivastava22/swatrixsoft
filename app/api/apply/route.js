// app/api/apply/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // ensure we can use nodemailer

export async function POST(request) {
  try {
    // 1. pull fields + file out of the FormData
    const formData = await request.formData();
    const email    = formData.get("email");
    const jobTitle = formData.get("jobTitle");
    const resume   = formData.get("resume"); // a File

    if (!email || !jobTitle || !resume) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    // 2. convert the File into a Buffer
    const arrayBuffer = await resume.arrayBuffer();
    const resumeBuffer = Buffer.from(arrayBuffer);

    // 3. set up your Gmail transporter with your App Password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // e.g. swatrixsoft@gmail.com
        pass: process.env.EMAIL_PASS, // your 16‑char App Password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // 4. send the email with the resume attached
    await transporter.sendMail({
      from: `"Applicant" <${email}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Job Application: ${jobTitle}`,
      text: `Applicant Email: ${email}\nPosition: ${jobTitle}`,
      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer,
        },
      ],
    });

    return NextResponse.json({ success: true, message: "Application sent!" });
  } catch (err) {
    console.error("Apply API error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send application" },
      { status: 500 }
    );
  }
}
