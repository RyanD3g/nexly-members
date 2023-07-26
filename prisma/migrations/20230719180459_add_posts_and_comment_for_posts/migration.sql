-- CreateTable
CREATE TABLE "Posts" (
    "id" TEXT NOT NULL,
    "contentPost" TEXT NOT NULL,
    "momentPost" TEXT NOT NULL,
    "urlPhotoPost" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,
    "share" INTEGER NOT NULL,
    "producerId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comments_Post" (
    "id" TEXT NOT NULL,
    "nameUserComment" TEXT NOT NULL,
    "contentComment" TEXT NOT NULL,
    "likesComment" INTEGER NOT NULL,
    "commentPostId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comments_Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReplyComment_Posts" (
    "id" TEXT NOT NULL,
    "nameUserReplyComment" TEXT NOT NULL,
    "contentReplyComment" TEXT NOT NULL,
    "likesReplyComment" INTEGER NOT NULL,
    "replyId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReplyComment_Posts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_producerId_fkey" FOREIGN KEY ("producerId") REFERENCES "Producer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments_Post" ADD CONSTRAINT "Comments_Post_commentPostId_fkey" FOREIGN KEY ("commentPostId") REFERENCES "Posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReplyComment_Posts" ADD CONSTRAINT "ReplyComment_Posts_replyId_fkey" FOREIGN KEY ("replyId") REFERENCES "Comments_Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
