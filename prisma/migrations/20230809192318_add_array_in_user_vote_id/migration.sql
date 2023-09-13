/*
  Warnings:

  - The `userIdVote` column on the `Option_Poll` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Option_Poll" DROP COLUMN "userIdVote",
ADD COLUMN     "userIdVote" TEXT[];
