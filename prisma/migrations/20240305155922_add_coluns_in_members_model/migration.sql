/*
  Warnings:

  - A unique constraint covering the columns `[cpfUser]` on the table `Members_my_course` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cpfUser` to the `Members_my_course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameUser` to the `Members_my_course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Members_my_course" ADD COLUMN     "cpfUser" TEXT NOT NULL,
ADD COLUMN     "nameUser" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Members_my_course_cpfUser_key" ON "Members_my_course"("cpfUser");
