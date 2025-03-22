import { getServerSession } from "next-auth/next";
import dbConnect from "@/db/config/dbConnect";
import User from "@/db/models/User";
import jwt from "jsonwebtoken";
import { authOptions } from "../[...nextauth]/route";

export async function POST(req) {
  // Get the NextAuth session using getServerSession in Next.js 13 App Router
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response(
      JSON.stringify({ message: "Not authenticated" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  await dbConnect();
  const { email, name } = session.user;

  let user = await User.findOne({ email });
  if (!user) {
    user = await User.create({ email, name, password: null });
  }

  const token = jwt.sign(
    { userId: user._id, email },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );

  // Set cookie using Next.js 13 Response API
  const headers = new Headers();
  headers.append(
    "Set-Cookie",
    `authToken=${token}; HttpOnly; Path=/; Max-Age=86400; SameSite=Strict${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`
  );
  headers.append("Content-Type", "application/json");

  return new Response(
    JSON.stringify({ token, user: { _id: user._id, email: user.email, name: user.name } }),
    { status: 200, headers }
  );
}
