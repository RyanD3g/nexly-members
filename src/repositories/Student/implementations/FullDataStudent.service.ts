import { Injectable } from "@nestjs/common";
import { AFullStudent } from "../IFullStudent.student";
import { Address, Student } from "@prisma/client";
import { IFullStudent } from "../../../useCases/students/getFullStudent/FullStudent.DTO";
import { PrismaService } from "../../../database";

@Injectable()
export class GetFullDataStudent implements AFullStudent {
    constructor(
        private prisma:PrismaService,
    ){};
    async isComplete(data:IFullStudent): Promise<Address> {
         const validate_Is_not = await this.prisma.student.findUnique({
            where:{ id:data.studentId },
            include:{ address:true }, 
         });

         const valueAddress = validate_Is_not?.address;

         return valueAddress;
    };
    async getAllDataStudent(data: IFullStudent): Promise<Student> {
        const getData = await this.prisma.student.findUnique({
            where:{ id:data.studentId },
            include:{ address:true },
        });
        console.log("OLHE AQUI -------------------------------------", getData)
        return getData;
    };
};
