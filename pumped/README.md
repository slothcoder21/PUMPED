# Pumped - Your Fitness Companion

Pumped is a modern workout and fitness tracking application built with Next.js, featuring AI-powered workout generation.

## Features

- User authentication and profile management
- Workout tracking
- AI-powered workout generation
- Progress tracking and statistics
- Customizable fitness goals

## Getting Started

### Prerequisites

- Node.js (v18.0.0 or later)
- PostgreSQL database

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:

```env
# Database connection string
DATABASE_URL="postgresql://username:password@localhost:5432/pumped"

# NextAuth configuration
NEXTAUTH_SECRET="your-super-secret-key-for-jwt-token-generation"
NEXTAUTH_URL="http://localhost:3000"

# OpenAI (for AI workout generation)
OPENAI_API_KEY="your-openai-api-key"
```

4. Set up the database:

```bash
npx prisma db push
```

5. Run the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Authentication Setup

The application uses NextAuth.js for authentication with the following features:

- Email/password authentication
- JWT-based sessions
- Secure password hashing with bcrypt
- Protected routes with middleware

## Database Schema

The database includes the following main models:

- User: Stores user accounts and profile information
- Workout: Contains workout plans and sessions
- Exercise: Details of specific exercises
- Goals: User fitness goals
- Achievements: User fitness achievements

## API Routes

- `/api/auth/[...nextauth]`: Authentication endpoints
- `/api/auth/register`: User registration 
- `/api/profile`: User profile management
- `/api/workouts`: Workout management
- `/api/ai-workout`: AI workout generation

## License

This project is licensed under the MIT License.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
