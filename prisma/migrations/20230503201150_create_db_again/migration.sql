/*
  Warnings:

  - You are about to drop the `Address_By_Student` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Address_By_Student" DROP CONSTRAINT "Address_By_Student_studentId_fkey";

-- DropTable
DROP TABLE "Address_By_Student";

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "codeStreet" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT,
    "city" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "producerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Address_studentId_key" ON "Address"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "Address_producerId_key" ON "Address"("producerId");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_producerId_fkey" FOREIGN KEY ("producerId") REFERENCES "Producer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
