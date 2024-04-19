/*
  Warnings:

  - Added the required column `emailUser` to the `Members_my_course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Members_my_course" ADD COLUMN     "emailUser" TEXT NOT NULL;
