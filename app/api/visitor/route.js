import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

// In-memory storage (This will reset if server restarts)
let visitorCount = 0;
const uniqueVisitors = new Set(); // Stores unique user IDs

export async function GET(request) {
  const cookieHeader = request.headers.get("cookie") || "";
  const cookies = new Map(cookieHeader.split("; ").map(c => c.split("=")));

  let userUUID = cookies.get("visitorUUID");

  if (!userUUID) {
    userUUID = uuidv4(); // Generate new UUID if not found
  }

  if (!uniqueVisitors.has(userUUID)) {
    uniqueVisitors.add(userUUID);
    visitorCount++; // Only increase if it's a new visitor
  }

  // Create a response and set the UUID cookie
  const response = NextResponse.json({ count: visitorCount });
  response.cookies.set("visitorUUID", userUUID, {
    maxAge: 60 * 60 * 24 * 365, // Cookie lasts 1 year
    httpOnly: false,
  });

  return response;
}
