import { PrismaService } from "../../../database";
import { AUpdateAddress } from "../IUpdateAddress.student";
import { IUpdateAddress } from "../../../useCases/students/updateAddress/UpdateAddress.DTO";
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
        studentId,
        addressId,
        uf,
    }: IUpdateAddress): Promise<Object> {
        const updatedAddress =  await this.prisma.address_By_Student.update({
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
