/*
  Warnings:

  - You are about to drop the column `likesReplyComment` on the `ReplyComment_Posts` table. All the data in the column will be lost.
  - Added the required column `userId` to the `ReplyComment_Posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userUrlPhoto` to the `ReplyComment_Posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ReplyComment_Posts" DROP COLUMN "likesReplyComment",
ADD COLUMN     "userId" TEXT NOT NULL,
ADD COLUMN     "userUrlPhoto" TEXT NOT NULL;
