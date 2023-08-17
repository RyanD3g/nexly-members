import { PrismaService } from "src/database";
import { ARoomByProducer } from "../IRoomByProducer.producer";
import { IAllRoomsDTO } from "src/useCases/producer/roomsProducer/AllRooms.DTO";
import { Producer } from "@prisma/client";
import { Injectable } from "@nestjs/common";
import { CacheImplementation } from "src/providers/implementations/Redis.service";

@Injectable()
export class AllRoomsByProducerImplementation implements ARoomByProducer {
    constructor(
        private prisma:PrismaService,
        private cache:CacheImplementation,
    ){}
    async myRooms(data: IAllRoomsDTO): Promise<Object[] | Producer> {
        const isExistsCache = await this.cache.isCached(`DetailsAboutRoomsProducer - ${data.producerId}`);
        if(!isExistsCache){
            const details = await this.prisma.producer.findUnique({
                where:{ id:data.producerId, },
                include:{ roomTicket:true, },
            });
            const toCache = await this.cache.cache<Producer>(details, `DetailsAboutRoomsProducer - ${details.id}`, 600);
            await this.prisma.$disconnect();
            return toCache;
        };
        return isExistsCache;
    };
};
