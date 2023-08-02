-- AlterTable
ALTER TABLE "Posts" ADD COLUMN     "userLike" TEXT;

-- CreateIndex
CREATE INDEX "Posts_id_idx" ON "Posts"("id");
