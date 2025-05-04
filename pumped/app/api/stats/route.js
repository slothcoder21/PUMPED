import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import prisma from '../../lib/prisma';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;
    
    // Get total workouts count
    const totalWorkouts = await prisma.workout.count({
      where: { userId }
    });
    
    // Get active goals count
    const activeGoals = await prisma.goal.count({
      where: { 
        userId,
        isCompleted: false
      }
    });
    
    // Calculate weekly workouts
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay()); // Set to the start of current week (Sunday)
    startOfWeek.setHours(0, 0, 0, 0);
    
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // Set to end of week (Saturday)
    endOfWeek.setHours(23, 59, 59, 999);
    
    const weeklyWorkoutsCompleted = await prisma.workout.count({
      where: {
        userId,
        date: {
          gte: startOfWeek,
          lte: endOfWeek
        },
        isCompleted: true
      }
    });
    
    // Get or create workout streak
    let workoutStreak = await prisma.workoutStreak.findUnique({
      where: { userId }
    });
    
    if (!workoutStreak) {
      // Initialize streak for new user
      workoutStreak = await prisma.workoutStreak.create({
        data: {
          userId,
          currentStreak: 0,
          longestStreak: 0
        }
      });
    }
    
    return NextResponse.json({
      totalWorkouts,
      activeGoals,
      weeklyWorkouts: {
        completed: weeklyWorkoutsCompleted,
        total: 4 // Default target of 4 workouts per week
      },
      currentStreak: workoutStreak.currentStreak,
      longestStreak: workoutStreak.longestStreak
    });
  } catch (error) {
    console.error('Stats fetch error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 