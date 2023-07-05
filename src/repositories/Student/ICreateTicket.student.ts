import { Student, TicketSuport_Student } from "@prisma/client";
import { ICreateTicketDTO } from "src/useCases/students/createTicket/CreateTicket.DTO";

export abstract class ACreateTicket {
    abstract createTicket(data:ICreateTicketDTO): Promise<Student | TicketSuport_Student[]>;
};
