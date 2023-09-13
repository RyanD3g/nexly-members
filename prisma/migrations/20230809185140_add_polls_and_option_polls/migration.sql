-- CreateTable
CREATE TABLE "Post_Polls" (
    "id" TEXT NOT NULL,
    "titleQuestion" TEXT NOT NULL,
    "descriptionQuestion" TEXT,
    "pollsId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_Polls_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Option_Poll" (
    "id" TEXT NOT NULL,
    "nameSelection" TEXT NOT NULL,
    "qntVotes" INTEGER NOT NULL,
    "userIdVote" TEXT NOT NULL,
    "optionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Option_Poll_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post_Polls" ADD CONSTRAINT "Post_Polls_pollsId_fkey" FOREIGN KEY ("pollsId") REFERENCES "Producer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Option_Poll" ADD CONSTRAINT "Option_Poll_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "Post_Polls"("id") ON DELETE CASCADE ON UPDATE CASCADE;
