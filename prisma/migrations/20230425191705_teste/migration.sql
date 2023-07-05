-- CreateTable
CREATE TABLE "Tags_by_liking" (
    "id" TEXT NOT NULL,
    "categoryName" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tags_by_liking_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tags_by_liking" ADD CONSTRAINT "Tags_by_liking_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
