/*
  Warnings:

  - Added the required column `timeLife` to the `Notifications_Students` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Notifications_Students" ADD COLUMN     "timeLife" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Notifications_Producer" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "isRead" BOOLEAN,
    "timeLife" TEXT NOT NULL,
    "producerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notifications_Producer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Notifications_Producer" ADD CONSTRAINT "Notifications_Producer_producerId_fkey" FOREIGN KEY ("producerId") REFERENCES "Producer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
