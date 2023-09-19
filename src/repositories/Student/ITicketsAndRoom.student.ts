import { Student, TicketSuport_Student } from "@prisma/client";
import { ITicketsDTO } from "src/useCases/students/myTicketsAndRoom/TicketsAndRoom.DTO";

export abstract class ATicketsAndRoom {
    abstract myTickets(data:ITicketsDTO): Promise<Student> | TicketSuport_Student[];
};
