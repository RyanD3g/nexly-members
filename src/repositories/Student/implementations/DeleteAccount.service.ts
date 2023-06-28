import { Injectable } from "@nestjs/common";
import { ADeleteAccountStudent } from "../IDeleteAccount.student";
import { Student } from "@prisma/client";
import { IDeleteAccountStudentDTO } from "../../../useCases/students/setDateForDelete/DeleteAccount.DTO";
import { PrismaService } from "../../../database";
import * as dayjs from "dayjs";

@Injectable()
export class DeleteAccountStudentImplementation implements ADeleteAccountStudent{
    constructor(
        private prisma:PrismaService,
    ){};
    async isSetDelete(studentId: string): Promise<boolean> {
        const findForStudent = await this.prisma.student.findUnique({
            where:{ id:studentId, },
        });
        const isSetDelDate = findForStudent.delDate !== null;
        await this.prisma.$disconnect();
        return isSetDelDate;
    };
    async deleteAccount(data: IDeleteAccountStudentDTO): Promise<Student> {
        const findForStudent = await this.prisma.student.update({
            where:{ id:data.studentId },
            data:{
                delDate:dayjs().format('DD/MM/YYYY'),
            },
        });
        await this.prisma.$disconnect();
        return findForStudent;
    };
};
