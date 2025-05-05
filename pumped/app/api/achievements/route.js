import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import prisma from '../../lib/prisma';

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
    const limit = parseInt(searchParams.get('limit') || '10');

    // Validate parameters
    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    // Mock achievement data - in a real app, you would query the database
    const mockAchievements = [
      {
        id: '1',
        name: 'First Workout',
        description: 'Completed your first workout',
        unlockedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(), // 7 days ago
        image: '🏋️'
      },
      {
        id: '2',
        name: 'Workout Streak',
        description: 'Completed workouts 3 days in a row',
        unlockedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(), // 3 days ago
        image: '🔥'
      },
      {
        id: '3',
        name: 'Weight Goal',
        description: 'Reached your weight goal of 70kg',
        unlockedAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
        image: '⚖️'
      },
      {
        id: '4',
        name: 'Strength Milestone',
        description: 'Lifted over 100kg in squat',
        unlockedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14).toISOString(), // 14 days ago
        image: '💪'
      }
    ];

    // Return mock achievements, limiting to the requested amount
    return NextResponse.json(mockAchievements.slice(0, limit));
  } catch (error) {
    console.error('Achievements fetch error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 