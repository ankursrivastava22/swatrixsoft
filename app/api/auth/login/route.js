import dbConnect from "@/db/config/dbConnect";
import User from "@/db/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  // Ensure database connection is established
  await dbConnect();

  // Parse incoming JSON request for email and password
  const { email, password } = await req.json();

  // Find the user in the database using email
  const user = await User.findOne({ email });
  if (!user) {
    return new Response(JSON.stringify({ message: "Invalid credentials" }), { status: 400 });
  }

  // Compare provided password with the hashed password stored in the DB
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return new Response(JSON.stringify({ message: "Invalid credentials" }), { status: 400 });
  }

  // Generate a JWT token that expires in 1 hour
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

  // Return a successful response with token and user ID
  return new Response(JSON.stringify({ token, userId: user._id }), { status: 200 });
}
