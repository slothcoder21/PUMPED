import { NextResponse } from 'next/server';
import { getSession, authOptions } from '../../lib/auth';

export async function GET() {
  try {
    // Check server session
    const session = await getSession();

    return NextResponse.json({
      status: 'ok',
      authenticated: !!session,
      sessionData: session ? {
        expires: session.expires,
        user: {
          name: session.user?.name,
          email: session.user?.email,
          // Don't send sensitive data
        }
      } : null,
      nextAuthUrl: process.env.NEXTAUTH_URL || 'not set',
      basePath: authOptions.basePath,
      nextAuthSecretSet: !!process.env.NEXTAUTH_SECRET,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Auth debug error:', error);
    
    return NextResponse.json({
      status: 'error',
      error: error.message,
      timestamp: new Date().toISOString(),
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 });
  }
} 