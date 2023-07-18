import { Injectable } from "@nestjs/common";
import { AResponseTicket } from "../../IResponse.producer";
import { RoomForTicket, TicketSuport_Student } from "@prisma/client";
import { IResponseTicketDTO } from "src/useCases/producer/responseTicket/NewChat.DTO";

@Injectable()
export class ResponseTicketInMemory implements AResponseTicket {
    private TicketModel: TicketSuport_Student[] = [
        {
            id:'123',
            name:'Teste de name',
            category:'Teste de categoria',
            identity:'Teste de identidade',
            number:'Teste de número',
            priority:'Teste de prioridade',
            status:'Teste de status',
            description:'Teste de descrição',
            studentId:'546',
            createdAt:new Date(),
            updatedAt:new Date(),
        },
    ];
    private RoomModel: RoomForTicket[] = [];
    createNewRoom(data: IResponseTicketDTO): RoomForTicket[] {
        const filtrar = this.TicketModel.filter(e => e.id == data.ticketId);
        const create = this.RoomModel.push({
            id:'4357',
            nameRoom:filtrar[0].name,
            producerId:'456',
            ticketId:data.ticketId,
            createdAt:new Date(),
            updatedAt:new Date(),
        });

        return this.RoomModel;
    };
};
