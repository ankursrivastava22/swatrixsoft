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
