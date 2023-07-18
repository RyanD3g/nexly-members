import { Injectable } from "@nestjs/common";
import { AResponseTicket } from "../IResponse.producer";
import { RoomForTicket, TicketSuport_Student } from "@prisma/client";
import { IResponseTicketDTO } from "src/useCases/producer/responseTicket/NewChat.DTO";
import { PrismaService } from "src/database";

@Injectable()
export class ResponseTicketImplementation implements AResponseTicket {
    constructor(
        private prisma:PrismaService,
    ){};
    async createNewRoom(data: IResponseTicketDTO): Promise<RoomForTicket[]> {
        const create = await this.prisma.ticketSuport_Student.update({
            where:{ id:data.ticketId, },
            include:{ ticketRoom:true },

            data:{
                ticketRoom:{
                    create:{
                        nameRoom:data.nameRoom,
                        producerId:data.producerId,
                    },
                },
            },
        });

        return create.ticketRoom;
    };
};
