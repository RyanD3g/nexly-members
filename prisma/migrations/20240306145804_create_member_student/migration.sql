-- DropIndex
DROP INDEX "Members_my_course_idUser_key";

-- AddForeignKey
ALTER TABLE "Members_my_course" ADD CONSTRAINT "Members_my_course_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
