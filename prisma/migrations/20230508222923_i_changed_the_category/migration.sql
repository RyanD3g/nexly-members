/*
  Warnings:

  - You are about to drop the column `categoryTag` on the `Courses_Producer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Courses_Producer" DROP COLUMN "categoryTag",
ADD COLUMN     "categorysTag" TEXT[] DEFAULT ARRAY['outros']::TEXT[];

-- AlterTable
ALTER TABLE "Producer" ALTER COLUMN "isProducer" SET DEFAULT false,
ALTER COLUMN "isAccountActive" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Tags_by_liking" ALTER COLUMN "categoryName" DROP NOT NULL,
ALTER COLUMN "categoryName" SET DEFAULT 'outros';
