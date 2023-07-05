import { IAddressByProducer } from "../../../useCases/producer/createAddress/CreateAddress.DTO";
import { ACreateAddress } from "../ICreateAddress.producer";
import { PrismaService } from "../../../database";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateAddressImplementation implements ACreateAddress {
    constructor(
        private prisma:PrismaService,
    ){};
    async createAddress({
        city,
        codeStreet,
        complement,
        number,
        street,
        producerId,
        uf,
    }: IAddressByProducer): Promise<Object> {
        const createAddress =  await this.prisma.producer.update({
            where:{ id:producerId },

            data:{
                address:{
                    create:{
                        city,
                        codeStreet,
                        complement,
                        number,
                        street,
                        uf,
                    },
                },
            },
        });
        return { created:true, };
    };
};
