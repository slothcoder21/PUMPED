-- CreateEnum
CREATE TYPE "WorkoutStatus" AS ENUM ('PLANNED', 'IN_PROGRESS', 'COMPLETED');

-- AlterTable
ALTER TABLE "Workout" ADD COLUMN     "startedAt" TIMESTAMP(3),
ADD COLUMN     "status" "WorkoutStatus" NOT NULL DEFAULT 'PLANNED';
