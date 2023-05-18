/*
  Warnings:

  - You are about to drop the column `studentId` on the `Courses_Producer` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Courses_Producer" DROP CONSTRAINT "Courses_Producer_studentId_fkey";

-- AlterTable
ALTER TABLE "Courses_Producer" DROP COLUMN "studentId",
ALTER COLUMN "cretificate" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Courses_Student" ADD COLUMN     "coursesId" TEXT[];

-- AlterTable
ALTER TABLE "Movies_Modules" ADD COLUMN     "like" INTEGER;
