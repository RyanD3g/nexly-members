/*
  Warnings:

  - You are about to drop the column `studentId` on the `RoomForTicket` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "RoomForTicket" DROP CONSTRAINT "RoomForTicket_studentId_fkey";

-- AlterTable
ALTER TABLE "RoomForTicket" DROP COLUMN "studentId";
