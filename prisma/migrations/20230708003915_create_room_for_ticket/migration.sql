-- CreateTable
CREATE TABLE "RoomForTicket" (
    "id" TEXT NOT NULL,
    "nameRoom" TEXT NOT NULL,
    "ticketId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "producerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RoomForTicket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MessagesForRoom" (
    "id" TEXT NOT NULL,
    "userMessage" TEXT NOT NULL,
    "contentMessage" TEXT NOT NULL,
    "ticketId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "roomForTicketId" TEXT,

    CONSTRAINT "MessagesForRoom_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RoomForTicket" ADD CONSTRAINT "RoomForTicket_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "TicketSuport_Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomForTicket" ADD CONSTRAINT "RoomForTicket_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomForTicket" ADD CONSTRAINT "RoomForTicket_producerId_fkey" FOREIGN KEY ("producerId") REFERENCES "Producer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessagesForRoom" ADD CONSTRAINT "MessagesForRoom_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "TicketSuport_Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessagesForRoom" ADD CONSTRAINT "MessagesForRoom_roomForTicketId_fkey" FOREIGN KEY ("roomForTicketId") REFERENCES "RoomForTicket"("id") ON DELETE SET NULL ON UPDATE CASCADE;
