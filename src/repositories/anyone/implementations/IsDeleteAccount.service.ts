import * as dayjs from 'dayjs';
import { Injectable } from "@nestjs/common";
import { PrismaService } from '../../../database';
import { AIsDeleteAccount } from '../IsAccountDelete.anyone';

@Injectable()
export class IsDeleteAccountImplementation implements AIsDeleteAccount {
    constructor(
        private prisma:PrismaService,
    ){};
    async isDelete(dateNow: string): Promise<void> {
        const deleted = await this.prisma.student.findMany({
            where:{
                delDate:{
                    not:null,
                },
            },
        });
        const searchForDeletes = deleted.map(async val =>{
            if(dayjs(dateNow, 'YYYY-MM-DD').diff(val.delDate, 'day') >= 10){
                await this.prisma.student.deleteMany({
                    where:{ id:val.id },
                });
            };
        });
        this.prisma.$disconnect();
    };
};
