/*
  Warnings:

  - You are about to drop the column `nameCourse` on the `Courses_Student` table. All the data in the column will be lost.
  - You are about to drop the column `tagCourse` on the `Courses_Student` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Courses_Student" DROP COLUMN "nameCourse",
DROP COLUMN "tagCourse",
ALTER COLUMN "lastSeen" SET DEFAULT '00:00:00';

-- CreateTable
CREATE TABLE "Producer" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "lastname" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "identity" TEXT,
    "phone" TEXT,
    "sex" TEXT,
    "photo" TEXT,
    "isProducer" BOOLEAN NOT NULL DEFAULT true,
    "isAccountActive" BOOLEAN NOT NULL DEFAULT true,
    "code" TEXT,
    "codeDate" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Producer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Courses_Producer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "urlThumbCourse" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "categoryTag" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "cretificate" BOOLEAN NOT NULL DEFAULT true,
    "producerId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Courses_Producer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Modules_Courses" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "duration" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Modules_Courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movies_Modules" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "urlMovie" TEXT NOT NULL,
    "urlMaterial" TEXT,
    "description" TEXT,
    "duration" TEXT,
    "moduleId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Movies_Modules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comments_movies" (
    "id" TEXT NOT NULL,
    "nameStudent" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comments_movies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Producer_email_key" ON "Producer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Producer_identity_key" ON "Producer"("identity");

-- CreateIndex
CREATE UNIQUE INDEX "Producer_phone_key" ON "Producer"("phone");

-- AddForeignKey
ALTER TABLE "Courses_Producer" ADD CONSTRAINT "Courses_Producer_producerId_fkey" FOREIGN KEY ("producerId") REFERENCES "Producer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Courses_Producer" ADD CONSTRAINT "Courses_Producer_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Courses_Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Modules_Courses" ADD CONSTRAINT "Modules_Courses_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Courses_Producer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Movies_Modules" ADD CONSTRAINT "Movies_Modules_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Modules_Courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments_movies" ADD CONSTRAINT "Comments_movies_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movies_Modules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
