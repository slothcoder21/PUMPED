/**
 * Authentication utilities and helpers
 */
import { hash, compare } from 'bcrypt';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

/**
 * Get the current user session on the server
 */
export async function getSession() {
  return await getServerSession(authOptions);
}

/**
 * Check if user is authenticated on the server
 */
export async function isAuthenticated() {
  const session = await getSession();
  return !!session;
}

/**
 * Get the current authenticated user ID
 */
export async function getCurrentUserId() {
  const session = await getSession();
  return session?.user?.id;
}

/**
 * Hash a password using bcrypt
 */
export async function hashPassword(password) {
  return await hash(password, 10);
}

/**
 * Compare a password with a hash using bcrypt
 */
export async function comparePasswords(password, hashedPassword) {
  return await compare(password, hashedPassword);
}

/**
 * Export authOptions so they can be reused elsewhere
 */
export { authOptions }; 