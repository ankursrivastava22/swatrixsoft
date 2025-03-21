import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Public paths that don't require authentication
  const publicPaths = [
    '/login',
    '/api/auth/login',
    '/api/auth/verify',
    '/api/auth/logout'
  ];

  // Allow public paths and static files
  if (publicPaths.includes(pathname) || 
      pathname.startsWith('/_next') || 
      pathname.includes('.')) {
    return NextResponse.next();
  }

  const authToken = request.cookies.get('authToken');

  if (!authToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(authToken.value, secret);
    
    const response = NextResponse.next();
    
    // Refresh token
    response.cookies.set('authToken', authToken.value, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 86400,
      path: '/'
    });
    
    return response;
  } catch (error) {
    // Token is invalid or expired
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('authToken');
    return response;
  }
}

export const config = {
  matcher: [
    '/((?!_next/static|favicon.ico|images).*)',
  ],
};