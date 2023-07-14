/*
  Warnings:

  - You are about to drop the column `ticketId` on the `MessagesForRoom` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "MessagesForRoom" DROP CONSTRAINT "MessagesForRoom_ticketId_fkey";

-- AlterTable
ALTER TABLE "MessagesForRoom" DROP COLUMN "ticketId",
ADD COLUMN     "ticketSuport_StudentId" TEXT;

-- AddForeignKey
ALTER TABLE "MessagesForRoom" ADD CONSTRAINT "MessagesForRoom_ticketSuport_StudentId_fkey" FOREIGN KEY ("ticketSuport_StudentId") REFERENCES "TicketSuport_Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;
