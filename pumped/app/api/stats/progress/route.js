import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import prisma from '../../../lib/prisma';

export async function GET(request) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get query parameters
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const timeRange = searchParams.get('timeRange') || '1m';

    // Validate parameters
    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    // Calculate date range based on timeRange
    const today = new Date();
    let startDate = new Date(today);
    
    switch (timeRange) {
      case '1w':
        startDate.setDate(today.getDate() - 7);
        break;
      case '1m':
        startDate.setMonth(today.getMonth() - 1);
        break;
      case '3m':
        startDate.setMonth(today.getMonth() - 3);
        break;
      case '6m':
        startDate.setMonth(today.getMonth() - 6);
        break;
      case '1y':
        startDate.setFullYear(today.getFullYear() - 1);
        break;
      default:
        startDate.setMonth(today.getMonth() - 1); // Default to 1 month
    }

    // Mock data for now - in a real app, you would query the database for this data
    // This is just to fix the immediate JSON parsing error
    const mockData = {
      weight: {
        '1w': generateMockTimeseriesData(7, 70, 75),
        '1m': generateMockTimeseriesData(30, 70, 75),
        '3m': generateMockTimeseriesData(90, 70, 75),
        '6m': generateMockTimeseriesData(180, 70, 75),
        '1y': generateMockTimeseriesData(365, 70, 75)
      },
      strength: {
        '1w': generateMockTimeseriesData(7, 80, 100),
        '1m': generateMockTimeseriesData(30, 80, 100),
        '3m': generateMockTimeseriesData(90, 80, 100),
        '6m': generateMockTimeseriesData(180, 80, 100),
        '1y': generateMockTimeseriesData(365, 80, 100)
      },
      workouts: {
        '1w': generateMockTimeseriesData(7, 0, 1, true),
        '1m': generateMockTimeseriesData(30, 0, 1, true),
        '3m': generateMockTimeseriesData(90, 0, 1, true),
        '6m': generateMockTimeseriesData(180, 0, 1, true),
        '1y': generateMockTimeseriesData(365, 0, 1, true)
      },
      cardio: {
        '1w': generateMockTimeseriesData(7, 20, 45),
        '1m': generateMockTimeseriesData(30, 20, 45),
        '3m': generateMockTimeseriesData(90, 20, 45),
        '6m': generateMockTimeseriesData(180, 20, 45),
        '1y': generateMockTimeseriesData(365, 20, 45)
      }
    };

    return NextResponse.json(mockData);
  } catch (error) {
    console.error('Progress data fetch error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Helper function to generate mock timeseries data
function generateMockTimeseriesData(days, min, max, binary = false) {
  const data = [];
  const today = new Date();
  
  for (let i = 0; i < days; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - (days - i));
    
    let value;
    if (binary) {
      // For workout data (binary: occurred or not)
      value = Math.random() > 0.3 ? 1 : 0;
    } else {
      // For continuous data like weight, strength, cardio
      value = min + Math.random() * (max - min);
    }
    
    data.push({
      x: date.getTime(),
      y: binary ? value : parseFloat(value.toFixed(1))
    });
  }
  
  return data;
} 