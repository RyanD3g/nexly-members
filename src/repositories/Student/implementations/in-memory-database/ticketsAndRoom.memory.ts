import { Injectable } from "@nestjs/common";
import { ATicketsAndRoom } from "../../ITicketsAndRoom.student";
import { Student, TicketSuport_Student } from "@prisma/client";
import { ITicketsDTO } from "../../../../useCases/students/myTicketsAndRoom/TicketsAndRoom.DTO";

@Injectable()
export class TicketsAndRoomInMemory implements ATicketsAndRoom {
    private ticketModel:TicketSuport_Student[] = [
        {
            id:'123',
            name:'Teste de nome',
            identity:'Teste de identidade',
            description:'Teste de descrição',
            number:'Teste de número',
            priority:'Teste de prioridade',
            status:'Teste de status',
            category:'Teste de categoria',
            studentId:'356',
            createdAt:new Date(),
            updatedAt:new Date(),
        },
    ];
    myTickets(data: ITicketsDTO): TicketSuport_Student[] {
        const searchAllTickets = this.ticketModel.filter(e => e.id === data.ticketId && e.studentId === data.studentId);
        return searchAllTickets;
    };
};
