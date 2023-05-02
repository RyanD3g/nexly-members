import { Injectable } from "@nestjs/common";
import { IDataByStudent } from "../../../useCases/students/createDataForRegister/CreateData.DTO";
import { ACreateDataForRegister } from "../ICreateData.student";
import { Student } from "@prisma/client";
import { PrismaService } from "../../../database";

@Injectable()
export class CreateDataStudentImplementation implements ACreateDataForRegister {
    constructor(
        private prisma:PrismaService,
    ){};

    async create(
        {
            lastname,
            name,
            phone_number,
            bio,
            cpf,
            sex,
            studentId,
        }
        :IDataByStudent): Promise<Object>{
        const created = await this.prisma.student.update({
            where:{ id:studentId },

            data:{
                name,
                lastname,
                phone: phone_number,
                bio,
                cpf,
                sex,
            }
        });      
        await this.prisma.$disconnect();
        return { user: created };
    };
};
