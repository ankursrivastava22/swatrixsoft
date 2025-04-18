// middleware.js
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // ✅ Allow public routes: API, static files, /login, AND /
  if (
    pathname.startsWith("/api") ||
    pathname === "/login" ||
    pathname === "/" ||            // <-- add this
    pathname.startsWith("/_next") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const authToken = request.cookies.get("authToken");
  if (!authToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    await jwtVerify(authToken.value, secret);

    // refresh cookie
    const response = NextResponse.next();
    response.cookies.set("authToken", authToken.value, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 86400,
      path: "/",
    });
    return response;
  } catch {
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("authToken");
    return response;
  }
}

export const config = {
  matcher: [
    "/((?!_next/static|favicon.ico|images).*)",
  ],
};
