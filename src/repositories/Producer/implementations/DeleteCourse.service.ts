import * as dayjs from 'dayjs';
import { Injectable } from "@nestjs/common";
import { ADeleteCourse } from "../IDeleteCourse.producer";
import { IDeleteCourseDTO } from "../../../useCases/producer/deleteCourse/DeleteCourse.DTO";
import { Courses_Producer, Courses_Student, Notifications_Students } from "@prisma/client";
import { PrismaService } from '../../../database';

@Injectable()
export class DeleteCourseImplementation implements ADeleteCourse {
    constructor(
        private prisma:PrismaService,
    ){};
    async isMyCourse(data: IDeleteCourseDTO): Promise<boolean> {
        const myCourse = await this.prisma.producer.findUnique({
            where:{ id:data.producerId },
            include:{ courses:true },
        });

        const verify = myCourse.courses.some(e => e.id == data.courseId);
        return verify;
    };
    async delete(data: IDeleteCourseDTO): Promise<Courses_Producer> {
        const setDateForDelete = await this.prisma.courses_Producer.findUnique({
            where:{ id:data.courseId, },
        });
        if(setDateForDelete.delDate != null){
            throw new Error(`Curso já programado para deleção no dia ${setDateForDelete.delDate}`);
        };
        const setDate = await this.prisma.courses_Producer.update({
            where:{ id:data.courseId },
            data:{
                delDate:dayjs().format('DD/MM/YYYY'),
            },
        });
        const sendNotificationsForStudents = await this.prisma.student.findMany({
            where:{ 
             courses:{
                every:{
                  studentCoursesId:data.courseId,
                }
             } 
        }
        });
        const sendNotifications = sendNotificationsForStudents.map(async val =>{
            await this.prisma.student.update({
                where:{ 
                    id: val.id,
                 },
                 data:{
                    notifications:{
                        create:{
                            title:'Seu Curso será deletado!',
                            timeLife:dayjs().format('YYYY-MM-DD'),
                            content:`O curso ${setDateForDelete.name} será apagado em breve!!`,
                        },
                    },
                 },
            });
        });
        await this.prisma.$disconnect();
        return setDate;
    };
};
