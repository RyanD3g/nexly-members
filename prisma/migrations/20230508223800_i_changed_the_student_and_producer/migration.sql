-- DropForeignKey
ALTER TABLE "Courses_Producer" DROP CONSTRAINT "Courses_Producer_producerId_fkey";

-- DropForeignKey
ALTER TABLE "Courses_Producer" DROP CONSTRAINT "Courses_Producer_studentId_fkey";

-- AlterTable
ALTER TABLE "Courses_Producer" ALTER COLUMN "producerId" DROP NOT NULL,
ALTER COLUMN "studentId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Courses_Producer" ADD CONSTRAINT "Courses_Producer_producerId_fkey" FOREIGN KEY ("producerId") REFERENCES "Producer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Courses_Producer" ADD CONSTRAINT "Courses_Producer_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Courses_Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;
