import { NextResponse } from 'next/server';
import prisma from '../../lib/prisma';

// GET all exercises
export async function GET() {
  try {
    const exercises = await prisma.exercise.findMany({
      orderBy: {
        name: 'asc'
      }
    });

    return NextResponse.json(exercises);
  } catch (error) {
    console.error('Error fetching exercises:', error);
    return NextResponse.json({ error: 'Failed to fetch exercises' }, { status: 500 });
  }
} 