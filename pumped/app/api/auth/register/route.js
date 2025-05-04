import { NextResponse } from 'next/server';
import { hashPassword } from '../../../lib/auth';
import prisma from '../../../lib/prisma';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    console.log('Registration attempt for:', email);

    // Validate data
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user with transaction to ensure all related records are created
    const user = await prisma.$transaction(async (prisma) => {
      // Create main user record
      const newUser = await prisma.user.create({
        data: {
          name: name || '',
          email,
          password: hashedPassword,
          // Add default settings for a new user
          height: null,
          weight: null,
        }
      });

      // Create default workout streak entry
      await prisma.workoutStreak.create({
        data: {
          userId: newUser.id,
          currentStreak: 0,
          longestStreak: 0
        }
      });

      // Create default user settings
      await prisma.userSettings.create({
        data: {
          userId: newUser.id,
          theme: 'light',
          units: 'metric',
          language: 'english',
          privacyLevel: 'private',
          workoutReminders: true,
          progressUpdates: true,
          achievementAlerts: true,
          tipNotifications: false
        }
      });

      // Create starter goal
      await prisma.goal.create({
        data: {
          userId: newUser.id,
          name: 'Complete First Workout',
          description: 'Start your fitness journey by completing your first workout',
          isCompleted: false,
          type: 'HABIT',
          currentValue: 0,
          targetValue: 1
        }
      });

      return newUser;
    });

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    console.log('User registered successfully:', email);
    
    return NextResponse.json(
      { 
        message: 'User created successfully',
        user: userWithoutPassword
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Registration error details:', {
      message: error.message,
      stack: error.stack,
      code: error.code
    });
    
    // Return more specific errors based on Prisma error codes
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'A user with this email already exists' },
        { status: 409 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error during registration' },
      { status: 500 }
    );
  }
} 