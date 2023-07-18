import { Injectable } from "@nestjs/common";
import { AReturnTickets } from "../../IReturnTickets.anyone";
import { TicketSuport_Student } from "@prisma/client";

@Injectable()
export class ReturnTicketInMemory implements AReturnTickets {
    private TicketsModel: TicketSuport_Student[] = [
        {
            id:'Teste de ID',
            category:'Teste de categoria',
            name:'Teste de nome',
            number:'Teste de número de telefone',
            identity:'Teste de identidade',
            description:'Teste de descrição',
            priority:'Teste de prioridade',
            status:'Teste de status',
            studentId:'Teste de identificador de usuário',
            createdAt:new Date(),
            updatedAt:new Date(),
        },
    ];

    allTickets(): TicketSuport_Student[] {
        const returnAll = this.TicketsModel;
        return returnAll;
    };
};
