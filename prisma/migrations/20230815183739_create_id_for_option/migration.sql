/*
  Warnings:

  - You are about to drop the column `userIdVote` on the `Option_Poll` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Option_Poll" DROP COLUMN "userIdVote";

-- CreateTable
CREATE TABLE "IdUserVote" (
    "id" TEXT NOT NULL,
    "idUser" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IdUserVote_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "IdUserVote" ADD CONSTRAINT "IdUserVote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Option_Poll"("id") ON DELETE CASCADE ON UPDATE CASCADE;
