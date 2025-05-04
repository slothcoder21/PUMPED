import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  
  // Get the pathname of the request
  const path = req.nextUrl.pathname;

  // Define protected routes
  const protectedRoutes = [
    '/dashboard', 
    '/profile',
    '/workouts',
    '/progress',
    '/settings',
    '/ai-workout'
  ];

  // Define auth routes
  const authRoutes = ['/signin', '/signup'];

  // Check if the path is a protected route
  const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route));
  
  // Check if the path is an auth route
  const isAuthRoute = authRoutes.some(route => path === route);

  // If the path is an auth route and the user is authenticated, redirect to dashboard
  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // If the path is a protected route and the user is not authenticated, redirect to sign in
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/signin', req.url));
  }

  return NextResponse.next();
}

// Match all routes except static files, api routes, etc.
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
}; 