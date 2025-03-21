import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import dbConnect from "@/db/config/dbConnect";
import User from "@/db/models/User";

export async function GET(req) {
  try {
    await dbConnect();
    const cookieStore = cookies();
    const token = cookieStore.get('authToken')?.value;

    if (!token) {
      return new Response(
        JSON.stringify({ 
          success: false,
          message: "No token provided" 
        }), 
        { 
          status: 401,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select('-password');

    if (!user) {
      return new Response(
        JSON.stringify({ 
          success: false,
          message: "User not found" 
        }), 
        { 
          status: 401,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        user: {
          _id: user._id,
          email: user.email,
          name: user.name,
          role: user.role
        }
      }), 
      { 
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, no-cache, must-revalidate'
        }
      }
    );

  } catch (error) {
    console.error('Token verification error:', error);
    return new Response(
      JSON.stringify({ 
        success: false,
        message: "Invalid token" 
      }), 
      { 
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}