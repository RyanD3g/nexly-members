/*
  Warnings:

  - You are about to drop the column `likesComment` on the `Comments_Post` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Comments_Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userUrlPhoto` to the `Comments_Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comments_Post" DROP COLUMN "likesComment",
ADD COLUMN     "userId" TEXT NOT NULL,
ADD COLUMN     "userUrlPhoto" TEXT NOT NULL;
