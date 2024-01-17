/*
  Warnings:

  - You are about to drop the column `eventIsPast` on the `CalendarForStudents` table. All the data in the column will be lost.
  - You are about to drop the column `eventsSaved` on the `Student` table. All the data in the column will be lost.
  - Added the required column `studentId` to the `CalendarForStudents` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CalendarForStudents" DROP COLUMN "eventIsPast",
ADD COLUMN     "studentId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "eventsSaved";

-- AddForeignKey
ALTER TABLE "CalendarForStudents" ADD CONSTRAINT "CalendarForStudents_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
