-- CreateTable
CREATE TABLE "Courses_For_Youtube" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "urlThumbCourse" TEXT,
    "description" TEXT,
    "categorysTag" TEXT[] DEFAULT ARRAY['outros']::TEXT[],
    "cretificate" BOOLEAN NOT NULL DEFAULT true,
    "delDate" TEXT,
    "channelIdChanged" TEXT,
    "playlistIdChanged" TEXT,
    "refreshToken" TEXT,
    "producerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Courses_For_Youtube_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Courses_For_Youtube" ADD CONSTRAINT "Courses_For_Youtube_producerId_fkey" FOREIGN KEY ("producerId") REFERENCES "Producer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
