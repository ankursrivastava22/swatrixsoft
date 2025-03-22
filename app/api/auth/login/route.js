import dbConnect from "@/db/config/dbConnect";
import User from "@/db/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    // Establish a connection to your database
    await dbConnect();

    // Parse the JSON body from the request
    const { email, password } = await req.json();

    // Validate request payload
    if (!email || !password) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Email and password are required",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Attempt to find the user and select the password field
    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid credentials",
        }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Generate a JWT token for the user
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        role: user.role || "user",
        timestamp: Date.now(),
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    // Set the authentication cookie using Next.js cookies API
    const cookieStore = cookies();
    cookieStore.set("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 86400, // 24 hours in seconds
    });

    // Prepare the user data to return (without password)
    const userWithoutPassword = {
      _id: user._id,
      email: user.email,
      name: user.name,
      role: user.role,
    };

    // Return a successful response along with the token and user data
    return new Response(
      JSON.stringify({
        success: true,
        message: "Login successful",
        user: userWithoutPassword,
        token,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store, no-cache, must-revalidate",
          // Optional: set cookie in headers too if needed
          "Set-Cookie": `authToken=${token}; HttpOnly; Path=/; Max-Age=86400; SameSite=Strict${
            process.env.NODE_ENV === "production" ? "; Secure" : ""
          }`,
        },
      }
    );
  } catch (error) {
    console.error("Login error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Internal server error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
