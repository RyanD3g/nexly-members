-- AlterTable
ALTER TABLE "SchedulingEvent" ADD COLUMN     "calendarId" TEXT;

-- CreateTable
CREATE TABLE "CalendarForStudents" (
    "id" TEXT NOT NULL,
    "eventIsPast" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CalendarForStudents_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CalendarForStudents_id_idx" ON "CalendarForStudents"("id");

-- CreateIndex
CREATE INDEX "SchedulingEvent_id_idx" ON "SchedulingEvent"("id");

-- AddForeignKey
ALTER TABLE "SchedulingEvent" ADD CONSTRAINT "SchedulingEvent_calendarId_fkey" FOREIGN KEY ("calendarId") REFERENCES "CalendarForStudents"("id") ON DELETE SET NULL ON UPDATE CASCADE;
