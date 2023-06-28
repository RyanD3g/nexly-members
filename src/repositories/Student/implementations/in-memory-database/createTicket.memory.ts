import { Injectable } from "@nestjs/common";
import { ACreateTicket } from "../../ICreateTicket.student";
import { ICreateTicketDTO } from "../../../../useCases/students/createTicket/CreateTicket.DTO";
import { TicketSuport_Student } from "@prisma/client";

@Injectable()
export class CreateTicketInMemory implements ACreateTicket {
    private TicketModel:TicketSuport_Student[] = [];
    async createTicket({
        name,
        number,
        category,
        priority,
        description,
        studentId,
    }: ICreateTicketDTO): Promise<TicketSuport_Student[]> {
        const createTicket = this.TicketModel.push(
            {
                id:'123',
                name,
                number,
                category,
                priority,
                description,
                status:null,
                studentId,
                updatedAt:new Date(),
                createdAt:new Date(),
            },
        );
        return this.TicketModel;
    };
};
