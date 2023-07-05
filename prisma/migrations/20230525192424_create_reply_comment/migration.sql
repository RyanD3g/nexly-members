-- CreateTable
CREATE TABLE "Reply_Comment" (
    "id" TEXT NOT NULL,
    "nameStudent" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reply_Comment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reply_Comment" ADD CONSTRAINT "Reply_Comment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comments_movies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
