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
    
    async findByPhone(phone: string): Promise<Student> {
        const searchByPhone = await this.prisma.student.findUnique({
            where:{ phone, }
        });

        return searchByPhone;
    };
    async findByIdentity(identity: string): Promise<Student> {
        const searchByIdentity = await this.prisma.student.findUnique({
            where:{ cpf:identity, },
        });

        return searchByIdentity;
    };

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
            console.log("AQUI:", cpf)
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
