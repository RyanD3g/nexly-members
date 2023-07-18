import { PrismaService } from "src/database";
import { ARoomByProducer } from "../IRoomByProducer.producer";
import { IAllRoomsDTO } from "src/useCases/producer/roomsProducer/AllRooms.DTO";
import { Producer } from "@prisma/client";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AllRoomsByProducerImplementation implements ARoomByProducer {
    constructor(
        private prisma:PrismaService,
    ){}
    async myRooms(data: IAllRoomsDTO): Promise<Producer> {
        const details = await this.prisma.producer.findUnique({
            where:{ id:data.producerId, },
            include:{ roomTicket:true, },
        });
        await this.prisma.$disconnect();
        return details;
    };
};
