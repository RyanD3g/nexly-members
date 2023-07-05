import { Injectable } from "@nestjs/common";
import { IDataByProducer } from "../../../useCases/producer/createDataForRegister/CreateData.DTO";
import { ACreateDataForRegister } from "../ICreateData.producer";
import { PrismaService } from "../../../database";
import { Producer } from "@prisma/client";

@Injectable()
export class CreateDataProducerImplementation implements ACreateDataForRegister {
    constructor(
        private prisma:PrismaService,
    ){};

    async findByPhone(phone: string): Promise<Producer> {
        const searchByPhone = await this.prisma.producer.findUnique({
            where:{ phone, }
        });

        return searchByPhone;
    };

    async findByIdentity(identity: string): Promise<Producer> {
        const searchByIdentity = await this.prisma.producer.findUnique({
            where:{ identity, }
        });

        return searchByIdentity;
    };

    async create(
        {
            lastname,
            name,
            phone_number,
            identity,
            sex,
            producerId,
        }
        :IDataByProducer): Promise<Object>{
        const created = await this.prisma.producer.update({
            where:{ id:producerId },

            data:{
                name,
                lastname,
                phone: phone_number,
                identity,
                sex,
            }
        });      
        await this.prisma.$disconnect();
        return { user: created };
    };
};
