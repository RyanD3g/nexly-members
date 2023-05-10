import { IAddressByStudent } from "../../../useCases/students/createAddress/CreateAddress.DTO";
import { ACreateAddress } from "../ICreateAddress.student";
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
        studentId,
        uf,
    }: IAddressByStudent): Promise<Object> {
        const createAddress =  await this.prisma.student.update({
            where:{ id:studentId },

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
        console.log("FOI AQUI")
        return { created:true, };
    };
};
