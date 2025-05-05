// Import NextResponse from Next.js server utilities for handling HTTP responses
import { NextResponse } from 'next/server';
// Import getToken from NextAuth for JWT authentication verification
import { getToken } from 'next-auth/jwt';

// Middleware function that runs before each request to handle authentication and routing
export async function middleware(req) {
  // Verify the authentication token from cookies/session
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  
  // Extract the current pathname from the request URL
  const path = req.nextUrl.pathname;

  // List of routes that require authentication to access
  const protectedRoutes = [
    '/dashboard', 
    '/profile',
    '/workouts',
    '/progress',
    '/settings',
    '/ai-workout'
  ];

  // List of authentication-related routes (login/signup pages)
  const authRoutes = ['/signin', '/signup'];

  // Check if the current path starts with any protected route prefix
  const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route));
  
  // Check if the current path exactly matches any authentication route
  const isAuthRoute = authRoutes.some(route => path === route);

  // If user is already logged in and tries to access auth pages,
  // redirect them to the dashboard (prevent unnecessary auth flows)
  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // If user is not logged in and tries to access protected routes,
  // redirect them to the sign in page
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/signin', req.url));
  }

  // For all other routes, continue to the requested page
  return NextResponse.next();
}

// Configuration for which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * 
     * This ensures middleware only runs on application pages, not on static assets or API routes
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
}; 