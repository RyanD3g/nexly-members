import * as dayjs from 'dayjs';
import { Injectable } from "@nestjs/common";
import { ACourseIsDelete } from "../ICourseIsDelete.anyone";
import { PrismaService } from '../../../database';

@Injectable()
export class IsDeleteCourseImplementation implements ACourseIsDelete {
    constructor(
        private prisma:PrismaService,
    ){};
    async isDelete(dateNow: string): Promise<void> {
        const deleted = await this.prisma.courses_Producer.findMany({
            where:{
                delDate:{
                    not:null,
                },
            },
        });
        const searchForDeletes = deleted.map(async val =>{
            if(dayjs(dateNow, 'YYYY-MM-DD').diff(val.delDate, 'day') >= 10){
                await this.prisma.courses_Producer.deleteMany({
                    where:{ id:val.id },
                });
            };
        });
        this.prisma.$disconnect();
    };
};
