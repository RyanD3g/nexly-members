import { Injectable } from "@nestjs/common";
import { AFullProducer } from "../IFullProducer.producer";
import { AddressForProducers, Producer } from "@prisma/client";
import { IFullProducer } from "../../../useCases/producer/getFullProducer/FullProducer.DTO";
import { PrismaService } from "../../../database";

@Injectable()
export class GetFullDataProducer implements AFullProducer {
    constructor(
        private prisma:PrismaService,
    ){};
    async isComplete(data:IFullProducer): Promise<AddressForProducers> {
         const validate_Is_not = await this.prisma.producer.findUnique({
            where:{ id:data.producerId },
            include:{ address:true }, 
         });

         const valueAddress = validate_Is_not?.address;

         return valueAddress;
    };
    async getAllDataProducer(data: IFullProducer): Promise<Producer> {
        const getData = await this.prisma.producer.findUnique({
            where:{ id:data.producerId },
            include:{ address:true },
        });
        return getData;
    };
};
