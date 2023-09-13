-- CreateTable
CREATE TABLE "SchedulingEvent" (
    "id" TEXT NOT NULL,
    "titleEvent" TEXT NOT NULL,
    "dataOfEvent" TEXT NOT NULL,
    "isHappened" BOOLEAN NOT NULL DEFAULT false,
    "hourOfEvent" TEXT NOT NULL,
    "descriptionAboutEvent" TEXT NOT NULL,
    "producerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SchedulingEvent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SchedulingEvent" ADD CONSTRAINT "SchedulingEvent_producerId_fkey" FOREIGN KEY ("producerId") REFERENCES "Producer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
