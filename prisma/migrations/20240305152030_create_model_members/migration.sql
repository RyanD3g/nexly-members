-- CreateEnum
CREATE TYPE "StateUserMember" AS ENUM ('BLOQUEADO', 'ATIVO', 'COLABORADOR');

-- CreateTable
CREATE TABLE "Members_my_course" (
    "id" TEXT NOT NULL,
    "idUser" TEXT NOT NULL,
    "stateUser" "StateUserMember" NOT NULL,
    "courseId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Members_my_course_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Members_my_course_idUser_key" ON "Members_my_course"("idUser");

-- AddForeignKey
ALTER TABLE "Members_my_course" ADD CONSTRAINT "Members_my_course_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Courses_Producer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
