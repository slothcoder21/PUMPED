import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import prisma from '../../lib/prisma';

// Get user workouts
export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')) : undefined;

    const workouts = await prisma.workout.findMany({
      where: { userId },
      orderBy: { date: 'desc' },
      take: limit,
      include: {
        exercises: {
          include: {
            exercise: true,
          },
        },
      },
    });

    return NextResponse.json(workouts);
  } catch (error) {
    console.error('Workouts fetch error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Create a new workout
export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;
    const body = await request.json();
    
    const { name, date, duration, notes, category, exercises } = body;

    console.log('Creating workout with exercises:', exercises);

    // First, create the basic workout
    const workout = await prisma.workout.create({
      data: {
        name,
        date: date ? new Date(date) : new Date(),
        duration: duration ? parseInt(duration) : null,
        notes,
        category,
        userId,
      },
    });

    // Then, process exercises separately
    if (exercises && exercises.length > 0) {
      const workoutExercises = [];

      for (const exercise of exercises) {
        try {
          // Extract exercise data
          const { exerciseId, name, sets, reps, weight, restTime, notes: exerciseNotes } = exercise;
          
          // Create basic workout exercise data
          const exerciseData = {
            workoutId: workout.id,
            sets: sets || 1,
            reps: reps || 10,
            weight: weight ? parseFloat(weight) : null,
            restTime: restTime ? parseInt(restTime) : 60,
            notes: exerciseNotes || null,
          };

          // If exerciseId is provided and valid (not a mock ID), connect to existing exercise
          if (exerciseId && !exerciseId.startsWith('mock-')) {
            try {
              // Check if the exercise exists
              const existingExercise = await prisma.exercise.findUnique({
                where: { id: exerciseId },
              });

              if (existingExercise) {
                exerciseData.exerciseId = exerciseId;
              }
            } catch (exErr) {
              console.error('Error checking exercise:', exErr);
              // Continue without connecting to an exercise
            }
          }

          // Create the workout exercise
          const workoutExercise = await prisma.workoutExercise.create({
            data: exerciseData,
          });

          workoutExercises.push(workoutExercise);
        } catch (exerciseError) {
          console.error('Error adding exercise to workout:', exerciseError);
          // Continue with other exercises
        }
      }
      
      console.log(`Added ${workoutExercises.length} exercises to workout`);
    }

    // Fetch the complete workout with exercises
    const completeWorkout = await prisma.workout.findUnique({
      where: { id: workout.id },
      include: {
        exercises: {
          include: {
            exercise: true,
          },
        },
      },
    });

    return NextResponse.json(completeWorkout, { status: 201 });
  } catch (error) {
    console.error('Workout creation error:', error);
    return NextResponse.json({ 
      error: 'Internal server error', 
      message: error.message,
      stack: error.stack
    }, { status: 500 });
  }
}

// Delete a workout
export async function DELETE(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const workoutId = searchParams.get('id');
    
    if (!workoutId) {
      return NextResponse.json({ error: 'Workout ID is required' }, { status: 400 });
    }

    // Get the workout to check ownership
    const workout = await prisma.workout.findUnique({
      where: { id: workoutId },
    });

    if (!workout) {
      return NextResponse.json({ error: 'Workout not found' }, { status: 404 });
    }

    if (workout.userId !== session.user.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    // Delete workout exercises first
    await prisma.workoutExercise.deleteMany({
      where: { workoutId },
    });

    // Delete the workout
    await prisma.workout.delete({
      where: { id: workoutId },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Workout deletion error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 