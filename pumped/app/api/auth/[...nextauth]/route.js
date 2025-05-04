import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { comparePasswords } from '../../../lib/auth';
import prisma from '../../../lib/prisma';

// Make sure secret is set
const secret = process.env.NEXTAUTH_SECRET || 'a-fallback-secret-for-development-only';

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        console.log('NextAuth authorize called with:', credentials?.email);
        
        if (!credentials?.email || !credentials?.password) {
          console.log('Missing email or password');
          return null;
        }

        try {
          // For testing purposes, allow a test user login
          if (credentials.email === 'test@example.com' && credentials.password === 'password') {
            console.log('Test login successful');
            return {
              id: '1',
              name: 'Test User',
              email: 'test@example.com',
              image: null,
            };
          }
          
          // Real database authentication
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email
            }
          });

          if (!user) {
            console.log('User not found');
            return null;
          }

          const isPasswordValid = await comparePasswords(credentials.password, user.password);

          if (!isPasswordValid) {
            console.log('Invalid password');
            return null;
          }

          console.log('Login successful for:', user.email);
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
          };
          
        } catch (error) {
          console.error('Authorization error:', error);
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/signin',
    signUp: '/signup',
    error: '/signin',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
  secret: secret,
  debug: true, // Force debug mode to see more detailed errors
  logger: {
    error(code, metadata) {
      console.error('NextAuth error:', { code, metadata });
    },
    warn(code) {
      console.warn('NextAuth warning:', code);
    },
    debug(code, metadata) {
      console.log('NextAuth debug:', { code, metadata });
    }
  },
  basePath: '/api/auth' // Add basePath to ensure API routes are correctly resolved
};

// Create a simple handler for Next.js App Router
const handler = NextAuth(authOptions);

// Export the handler functions directly
export { handler as GET, handler as POST }; 