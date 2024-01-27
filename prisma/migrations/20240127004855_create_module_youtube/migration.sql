/*
  Warnings:

  - You are about to drop the column `producerId` on the `Courses_For_Youtube` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[courseId]` on the table `Modules_Courses` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Courses_For_Youtube" DROP CONSTRAINT "Courses_For_Youtube_producerId_fkey";

-- DropForeignKey
ALTER TABLE "Modules_Courses" DROP CONSTRAINT "Modules_Courses_courseId_fkey";

-- AlterTable
ALTER TABLE "Courses_For_Youtube" DROP COLUMN "producerId",
ADD COLUMN     "courseYtId" TEXT;

-- AlterTable
ALTER TABLE "Modules_Courses" ALTER COLUMN "courseId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Modules_Courses_courseId_key" ON "Modules_Courses"("courseId");

-- AddForeignKey
ALTER TABLE "Courses_For_Youtube" ADD CONSTRAINT "Courses_For_Youtube_courseYtId_fkey" FOREIGN KEY ("courseYtId") REFERENCES "Courses_Producer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Modules_Courses" ADD CONSTRAINT "Modules_Courses_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Courses_Producer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
