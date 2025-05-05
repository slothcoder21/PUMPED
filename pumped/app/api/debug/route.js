import { NextResponse } from 'next/server';
import prisma from '../../lib/prisma';

export async function GET() {
  try {
    // Test database connection
    const databaseStatus = await testConnection();
    
    // Get environment variables (excluding sensitive data)
    const envInfo = {
      NODE_ENV: process.env.NODE_ENV || 'not set',
      NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'not set',
      DATABASE_URL_MASKED: process.env.DATABASE_URL ? `${process.env.DATABASE_URL.split('://')[0]}://****` : 'not set',
      PRISMA_CLIENT_PATH: process.env.PRISMA_CLIENT_PATH || 'not set (using default)',
    };
    
    return NextResponse.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      database: databaseStatus,
      environment: envInfo,
    });
  } catch (error) {
    console.error('Debug endpoint error:', error);
    return NextResponse.json({
      status: 'error',
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      timestamp: new Date().toISOString(),
    }, { status: 500 });
  }
}

async function testConnection() {
  try {
    // Attempt a simple query to test connection
    const userCount = await prisma.user.count();
    
    return {
      connected: true,
      userCount,
    };
  } catch (error) {
    return {
      connected: false,
      error: error.message,
      code: error.code,
    };
  }
} 