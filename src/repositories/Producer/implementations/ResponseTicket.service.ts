import { Injectable } from "@nestjs/common";
import { AResponseTicket } from "../IResponse.producer";
import { RoomForTicket } from "@prisma/client";
import { IResponseTicketDTO } from "src/useCases/producer/responseTicket/NewChat.DTO";
import { PrismaService } from "src/database";
import { CacheImplementation } from "src/providers/implementations/Redis.service";

@Injectable()
export class ResponseTicketImplementation implements AResponseTicket {
    constructor(
        private prisma:PrismaService,
        private cache:CacheImplementation,
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

        const setNewAllTicketsInCache = await this.cache.updateDataCache(await this.prisma.producer.findUnique({
            where:{ id:data.producerId, },
            include:{ roomTicket:true, },
        }), "DetailsAboutRoomsProducer", 600);

        return create.ticketRoom;
    };
};
