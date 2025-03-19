// app/api/visitor/route.js
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // A direct GET to increment the counter
    const res = await fetch("https://api.countapi.xyz/hit/swatrixsoft.com/visits");

    if (!res.ok) {
      // We reached CountAPI, but it returned a non-200 status
      return NextResponse.json(
        { error: "CountAPI returned an error" },
        { status: res.status }
      );
    }

    const data = await res.json(); // Should be { value: <new_count> }
    return NextResponse.json({ count: data.value });
  } catch (error) {
    // The fetch call failed entirely (likely a timeout or blocked)
    return NextResponse.json(
      { error: "Failed to reach CountAPI", details: error.message },
      { status: 500 }
    );
  }
}
