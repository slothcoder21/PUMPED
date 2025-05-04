import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import prisma from '../../../lib/prisma';

// Log completed workout
export async function POST(request) {
  console.log('Workout log API called');
  try {
    const session = await getServerSession(authOptions);
    console.log('Session:', session);
    if (!session || !session.user) {
      console.log('Unauthorized - No session or user found');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;
    console.log('User ID:', userId);
    
    // Parse request body
    let body;
    try {
      body = await request.json();
      console.log('Request body parsed successfully:', body);
    } catch (parseError) {
      console.error('Error parsing request body:', parseError);
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }
    
    // Extract data from request
    const { workoutId, name, date, notes, exercises, isCompleted } = body;
    console.log('Extracted data:', { workoutId, name, date, exercises: exercises?.length });
    
    // Create a new workout log entry
    const workoutLog = await prisma.workout.create({
      data: {
        name,
        date: date ? new Date(date) : new Date(),
        notes,
        isCompleted: isCompleted || true,
        userId,
        category: body.category || 'strength', // Default to strength if not specified
        // If this is based on an existing workout template, store the reference
        // This would require adding a new field to the schema
        // originalWorkoutId: workoutId, 
        duration: body.duration || 60,
        exercises: {
          create: exercises ? exercises.map((exercise) => ({
            sets: exercise.sets,
            reps: exercise.reps,
            weight: exercise.weight ? parseFloat(exercise.weight) : null,
            duration: exercise.duration ? parseInt(exercise.duration) : null,
            restTime: exercise.restTime ? parseInt(exercise.restTime) : null,
            notes: exercise.notes,
            exercise: {
              connect: { id: exercise.exerciseId }
            },
            // Track if this is a personal best
            personalBest: exercise.personalBest || false
          })) : []
        }
      },
      include: {
        exercises: {
          include: {
            exercise: true,
          },
        },
      },
    });
    
    console.log('Workout log created successfully:', workoutLog.id);

    // Update user stats after logging workout
    // This would typically update workout streak, progression stats, etc.
    await updateUserStats(userId);

    return NextResponse.json(workoutLog, { status: 201 });
  } catch (error) {
    console.error('Workout logging error:', error);
    return NextResponse.json({ error: 'Internal server error: ' + error.message }, { status: 500 });
  }
}

// Helper function to update user statistics after logging a workout
async function updateUserStats(userId) {
  try {
    // Get user's workout streak
    let workoutStreak = await prisma.workoutStreak.findUnique({
      where: { userId }
    });

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // If no streak record exists, create one
    if (!workoutStreak) {
      workoutStreak = await prisma.workoutStreak.create({
        data: {
          userId,
          currentStreak: 1,
          longestStreak: 1,
          lastWorkoutDate: today
        }
      });
    } else {
      // Calculate streak based on last workout date
      const lastDate = workoutStreak.lastWorkoutDate;
      
      if (lastDate) {
        const lastWorkoutDay = new Date(lastDate);
        lastWorkoutDay.setHours(0, 0, 0, 0);
        
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        
        // If worked out today already, streak stays the same
        if (lastWorkoutDay.getTime() === today.getTime()) {
          // Already logged today, don't increment streak
        }
        // If worked out yesterday, increment streak
        else if (lastWorkoutDay.getTime() === yesterday.getTime()) {
          const newStreak = workoutStreak.currentStreak + 1;
          await prisma.workoutStreak.update({
            where: { id: workoutStreak.id },
            data: {
              currentStreak: newStreak,
              longestStreak: Math.max(newStreak, workoutStreak.longestStreak),
              lastWorkoutDate: today
            }
          });
        } 
        // If missed a day, reset streak to 1
        else if (lastWorkoutDay < yesterday) {
          await prisma.workoutStreak.update({
            where: { id: workoutStreak.id },
            data: {
              currentStreak: 1,
              lastWorkoutDate: today
            }
          });
        }
      } else {
        // No last workout date, set to 1
        await prisma.workoutStreak.update({
          where: { id: workoutStreak.id },
          data: {
            currentStreak: 1,
            lastWorkoutDate: today
          }
        });
      }
    }
    
    // You could add more stats updates here:
    // - Record total workouts
    // - Track progress in specific exercises
    // - Update achievement progress
    // - etc.
    
  } catch (error) {
    console.error('Error updating user stats:', error);
    // Don't throw, just log the error so it doesn't block the main operation
  }
} 