-- DropForeignKey
ALTER TABLE "RoomForTicket" DROP CONSTRAINT "RoomForTicket_studentId_fkey";

-- AlterTable
ALTER TABLE "RoomForTicket" ALTER COLUMN "studentId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "RoomForTicket" ADD CONSTRAINT "RoomForTicket_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;
