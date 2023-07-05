/*
  Warnings:

  - Added the required column `studentId` to the `Favorites` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Favorites" ADD COLUMN     "studentId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Favorites" ADD CONSTRAINT "Favorites_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
