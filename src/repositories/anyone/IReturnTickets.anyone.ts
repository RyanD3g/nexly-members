import { TicketSuport_Student } from "@prisma/client";

export abstract class AReturnTickets {
    abstract allTickets(): Promise<boolean[]> | TicketSuport_Student[]; 
};
