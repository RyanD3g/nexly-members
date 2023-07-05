import * as dayjs from 'dayjs';
import { Injectable } from "@nestjs/common";
import { ADeleteAccount } from '../IDeleteAccount.producer';
import { IDeleteAccountDTO } from "../../../useCases/producer/deleteAccount/DeleteAccount.DTO";
import { Producer } from "@prisma/client";
import { PrismaService } from '../../../database';

@Injectable()
export class DeleteAccountImplementation implements ADeleteAccount {
    constructor(
        private prisma:PrismaService,
    ){};
    async accountIsDate(producerId: string): Promise<boolean> {
        const producer = await this.prisma.producer.findUnique({
            where:{ id:producerId, },
        });
        const isSetDate = producer.delDate === null;
        return isSetDate;
    };
    async deleteAccount(data: IDeleteAccountDTO): Promise<Producer> {
        const setDateForDelete = await this.prisma.producer.update({
            where:{ id:data.producerId, },
            include:{ courses:true },
            data:{
                delDate: dayjs().format('YYYY-MM-DD'),
            }
        });
        const mapeandoID = setDateForDelete.courses.map(val => val.id)
        const alertStudents = await this.prisma.courses_Student.findMany({
            where:{
                coursesId:{
                    in:mapeandoID
                },
            },
        });

        alertStudents.map(async val => {
            await this.prisma.student.update({
                where:{ id:val.studentCoursesId, },
                data:{
                    notifications:{
                        create:{
                            title:'Seu curso será apagado!!',
                            content:`Seu curso será apagado em 10 dias`,
                            timeLife:null,
                        },
                    },
                },
            });
        });
        await this.prisma.$disconnect();
        return setDateForDelete;
    };
};
