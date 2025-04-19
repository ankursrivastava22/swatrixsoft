// middleware.js
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // ✅ Allow public routes: API, static files, /login, /, Next.js assets, and all category pages
  if (
    pathname.startsWith("/api") ||
    pathname === "/login" ||
    pathname === "/" ||
    pathname.startsWith("/_next") ||
    pathname.includes(".") ||

    // Category columns (all slugs from your JSON)
    pathname.startsWith("/enterprise-software") ||
    pathname.startsWith("/web-development") ||
    pathname.startsWith("/software-product-development") ||
    pathname.startsWith("/ui-ux-design-services") ||
    pathname.startsWith("/devops") ||
    pathname.startsWith("/internet-of-things") ||
    pathname.startsWith("/machine-learning") ||

    pathname.startsWith("/mobile-app-development") ||
    pathname.startsWith("/mvp-development") ||
    pathname.startsWith("/ecommerce-development") ||
    pathname.startsWith("/app-modernization-services") ||
    pathname.startsWith("/blockchain") ||
    pathname.startsWith("/business-intelligence") ||

    pathname.startsWith("/artificial-intelligence") ||
    pathname.startsWith("/ai-consulting") ||
    pathname.startsWith("/ai-model-fine-tuning") ||
    pathname.startsWith("/ai-poc") ||
    pathname.startsWith("/ai-powered-mvps") ||
    pathname.startsWith("/rpa-development") ||
    pathname.startsWith("/generative-ai") ||

    pathname.startsWith("/on-demand-app-development") ||
    pathname.startsWith("/ott-platform-development") ||
    pathname.startsWith("/food-delivery-app") ||
    pathname.startsWith("/travel-app-development") ||
    pathname.startsWith("/taxi-app-development") ||
    pathname.startsWith("/custom-algo-solutions") ||

    pathname.startsWith("/automated-testing-services") ||
    pathname.startsWith("/software-testing") ||
    pathname.startsWith("/mobile-testing") ||
    pathname.startsWith("/support-maintenance") ||

    pathname.startsWith("/shipping-api-integration") ||
    pathname.startsWith("/payment-api-integration") ||
    pathname.startsWith("/social-networking-api-integration") ||

    pathname.startsWith("/it-consulting") ||
    pathname.startsWith("/product-auditing") ||
    pathname.startsWith("/startup-consulting") ||
    pathname.startsWith("/software-outsourcing") ||

    pathname.startsWith("/seo-services") ||
    pathname.startsWith("/smo-services") ||
    pathname.startsWith("/content-marketing")
  ) {
    return NextResponse.next();
  }

  // All other routes require a valid authToken
  const authToken = request.cookies.get("authToken");
  if (!authToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    await jwtVerify(authToken.value, secret);

    // Refresh cookie on each request
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
    // Apply middleware to everything except static assets and favicon
    "/((?!_next/static|favicon.ico|images).*)",
  ],
};
