/*
  Warnings:

  - A unique constraint covering the columns `[identity]` on the table `TicketSuport_Student` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `identity` to the `TicketSuport_Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TicketSuport_Student" ADD COLUMN     "identity" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "TicketSuport_Student_identity_key" ON "TicketSuport_Student"("identity");
