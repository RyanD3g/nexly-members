/*
  Warnings:

  - You are about to drop the column `producerId` on the `Address` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_producerId_fkey";

-- DropIndex
DROP INDEX "Address_producerId_key";

-- AlterTable
ALTER TABLE "Address" DROP COLUMN "producerId";

-- CreateTable
CREATE TABLE "AddressForProducers" (
    "id" TEXT NOT NULL,
    "codeStreet" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT,
    "city" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "producerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AddressForProducers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AddressForProducers_producerId_key" ON "AddressForProducers"("producerId");

-- AddForeignKey
ALTER TABLE "AddressForProducers" ADD CONSTRAINT "AddressForProducers_producerId_fkey" FOREIGN KEY ("producerId") REFERENCES "Producer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
