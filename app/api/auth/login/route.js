export const dynamic = "force-dynamic"; // ⬅️ prevents MongoDB call at build time

import dbConnect from "@/db/config/dbConnect";
import User from "@/db/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    await dbConnect();

    const { email, password } = await req.json();

    if (!email || !password) {
      return Response.json(
        { success: false, message: "Email and password are required" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user || !user.password || !(await bcrypt.compare(password, user.password))) {
      return Response.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      {
        userId: user._id.toString(),
        email: user.email,
        role: user.role || "user",
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    const cookieStore = cookies();
    cookieStore.set("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return Response.json(
      {
        success: true,
        message: "Login successful",
        user: {
          _id: user._id.toString(),
          email: user.email,
          username: user.username,
          role: user.role,
        },
        token,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return Response.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
