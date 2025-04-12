export const dynamic = "force-dynamic"; // ⬅️ prevents MongoDB call at build time

import dbConnect from "@/db/config/dbConnect";
import User from "@/db/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  await dbConnect();

  try {
    const { username, email, password, role } = await req.json();

    if (!username || !email || !password || !role) {
      return Response.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      // 🚫 Prevent password-based registration if user already exists (OAuth or otherwise)
      if (!existingUser.password) {
        return Response.json(
          {
            success: false,
            message:
              "This email is already registered with Google. Please use Google login.",
          },
          { status: 400 }
        );
      }

      return Response.json(
        { success: false, message: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role,
      provider: "credentials", // 👈 tag it as manually registered
    });

    await newUser.save();

    return Response.json(
      { success: true, message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration Error:", error);
    return Response.json(
      { success: false, message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
