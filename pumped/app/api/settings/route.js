import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import prisma from '../../lib/prisma';

// Get user settings
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;
    
    // Find user settings or create default ones if they don't exist yet
    let userSettings = await prisma.userSettings.findUnique({
      where: { userId }
    });
    
    if (!userSettings) {
      // Create default settings if the user doesn't have settings yet
      userSettings = await prisma.userSettings.create({
        data: {
          userId,
          theme: 'light',
          units: 'metric',
          language: 'english',
          privacyLevel: 'friends',
          workoutReminders: true,
          progressUpdates: true,
          achievementAlerts: true,
          tipNotifications: false
        }
      });
    }

    // Also get user's account info
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        name: true,
        email: true,
        image: true
      }
    });
    
    return NextResponse.json({
      ...userSettings,
      user
    });
  } catch (error) {
    console.error('Error fetching user settings:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Update user settings
export async function PUT(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;
    const data = await request.json();
    
    // Extract notification and preference data
    const {
      workoutReminders,
      progressUpdates,
      achievementAlerts,
      tipNotifications,
      theme,
      units,
      language,
      privacyLevel,
      name,
      email
    } = data;
    
    // Update user settings
    const settings = await prisma.userSettings.upsert({
      where: { userId },
      update: {
        workoutReminders,
        progressUpdates,
        achievementAlerts,
        tipNotifications,
        theme,
        units,
        language,
        privacyLevel
      },
      create: {
        userId,
        workoutReminders,
        progressUpdates,
        achievementAlerts,
        tipNotifications,
        theme,
        units,
        language,
        privacyLevel
      }
    });
    
    // If user profile info is included, update that too
    if (name || email) {
      await prisma.user.update({
        where: { id: userId },
        data: {
          ...(name && { name }),
          ...(email && { email })
        }
      });
    }
    
    return NextResponse.json(settings);
  } catch (error) {
    console.error('Error updating user settings:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 