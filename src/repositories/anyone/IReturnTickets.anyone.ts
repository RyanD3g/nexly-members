import { TicketSuport_Student, Student } from "@prisma/client";

export abstract class AReturnTickets {
    abstract allTickets(): Promise<Student[]> | TicketSuport_Student[]; 
};
