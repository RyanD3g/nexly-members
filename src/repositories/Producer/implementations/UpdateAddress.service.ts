import { PrismaService } from "../../../database";
import { AUpdateAddress } from "../IUpdateAddress.producer";
import { IUpdateAddress } from "../../../useCases/producer/updateAddress/UpdateAddress.DTO";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UpdateAddressImplementation implements AUpdateAddress {
    constructor(
        private prisma:PrismaService,
    ){};
    async updateAddress({
        city,
        codeStreet,
        complement,
        number,
        street,
        producerId,
        addressId,
        uf,
    }: IUpdateAddress): Promise<Object> {
        const updatedAddress =  await this.prisma.addressForProducers.update({
            where:{ id:addressId, },
            data:{
                city,
                codeStreet,
                complement,
                number,
                street,
                uf,
            }
        });
        return { updated:true, };
    };
};
