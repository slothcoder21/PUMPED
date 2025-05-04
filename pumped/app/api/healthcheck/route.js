import { NextResponse } from 'next/server';
import { checkConnection } from '../../lib/db';

export async function GET() {
  try {
    // Check if we can connect to the database
    const dbConnected = await checkConnection();

    return NextResponse.json({
      status: 'ok',
      database: dbConnected ? 'connected' : 'error',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
    });
  } catch (error) {
    console.error('Health check error:', error);
    
    return NextResponse.json({
      status: 'error',
      error: error.message,
      timestamp: new Date().toISOString(),
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 });
  }
} 