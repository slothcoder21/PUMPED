/**
 * Database utilities and helpers
 */
import prisma from './prisma';

/**
 * User-related database operations
 */
export const users = {
  /**
   * Find a user by email
   */
  async findByEmail(email) {
    return await prisma.user.findUnique({
      where: { email }
    });
  },

  /**
   * Find a user by ID
   */
  async findById(id) {
    return await prisma.user.findUnique({
      where: { id }
    });
  },

  /**
   * Create a new user
   */
  async create(data) {
    return await prisma.user.create({
      data
    });
  },

  /**
   * Update a user by ID
   */
  async update(id, data) {
    return await prisma.user.update({
      where: { id },
      data
    });
  },

  /**
   * Get user profile data (safely without password)
   */
  async getProfile(id) {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        height: true,
        weight: true,
        createdAt: true,
        updatedAt: true
      }
    });
    return user;
  }
};

/**
 * Workout-related database operations
 */
export const workouts = {
  /**
   * Get all workouts for a user
   */
  async getAllForUser(userId) {
    return await prisma.workout.findMany({
      where: { userId },
      orderBy: { date: 'desc' }
    });
  },

  /**
   * Get a workout by ID
   */
  async getById(id) {
    return await prisma.workout.findUnique({
      where: { id },
      include: {
        exercises: {
          include: {
            exercise: true
          }
        }
      }
    });
  }
};

/**
 * Exercise-related database operations
 */
export const exercises = {
  /**
   * Get all exercises
   */
  async getAll() {
    return await prisma.exercise.findMany({
      orderBy: { name: 'asc' }
    });
  },

  /**
   * Get exercises by muscle group
   */
  async getByMuscleGroup(muscleGroup) {
    return await prisma.exercise.findMany({
      where: { muscleGroup },
      orderBy: { name: 'asc' }
    });
  }
};

/**
 * Database health check
 */
export async function checkConnection() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return true;
  } catch (error) {
    console.error('Database connection error:', error);
    return false;
  }
}

export default prisma; 