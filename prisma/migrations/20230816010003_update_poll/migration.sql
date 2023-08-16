/*
  Warnings:

  - You are about to drop the column `userId` on the `IdUserVote` table. All the data in the column will be lost.
  - Added the required column `pollId` to the `IdUserVote` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "IdUserVote" DROP CONSTRAINT "IdUserVote_userId_fkey";

-- AlterTable
ALTER TABLE "IdUserVote" DROP COLUMN "userId",
ADD COLUMN     "pollId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "IdUserVote" ADD CONSTRAINT "IdUserVote_pollId_fkey" FOREIGN KEY ("pollId") REFERENCES "Post_Polls"("id") ON DELETE CASCADE ON UPDATE CASCADE;
