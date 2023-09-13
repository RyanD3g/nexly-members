/*
  Warnings:

  - You are about to drop the column `likes` on the `Posts` table. All the data in the column will be lost.
  - You are about to drop the column `userLike` on the `Posts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Posts" DROP COLUMN "likes",
DROP COLUMN "userLike";

-- CreateTable
CREATE TABLE "Likes_By_Posts" (
    "id" TEXT NOT NULL,
    "qntLikes" INTEGER NOT NULL,
    "userLike" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Likes_By_Posts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Likes_By_Posts" ADD CONSTRAINT "Likes_By_Posts_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
