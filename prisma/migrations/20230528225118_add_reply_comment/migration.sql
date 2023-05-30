/*
  Warnings:

  - You are about to drop the column `nameStudent` on the `Reply_Comment` table. All the data in the column will be lost.
  - Added the required column `nameUser` to the `Reply_Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reply_Comment" DROP COLUMN "nameStudent",
ADD COLUMN     "nameUser" TEXT NOT NULL;
