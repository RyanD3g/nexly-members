import * as dayjs from 'dayjs';
import { Injectable } from "@nestjs/common";
import { ADeleteCourse } from "../../IDeleteCourse.producer";
import { IDeleteCourseDTO } from "../../../../useCases/producer/deleteCourse/DeleteCourse.DTO";
import { Courses_Producer, Courses_Student, Notifications_Students } from "@prisma/client";

@Injectable()
export class DeleteCourseInMemory implements ADeleteCourse {
    private coursesProducer: Courses_Producer[] = [
        {
            id:'123',
            name:'Javascript FullStack',
            description:'Teste de descrição',
            cretificate:true,
            delDate:null,
            duration:'65h',
            urlThumbCourse:'teste.com',
            categorysTag:['T.I', 'Programação'],
            producerId:'234',
            createdAt:new Date(),
            updatedAt:new Date(),
        },
    ];
    private coursesStudent: Courses_Student[] = [
        {
            id:'435',
            completed:false,
            coursesId:'123',
            lastSeen:'2:45:54',
            studentCoursesId:'345',
            createdAt:new Date(),
            updatedAt:new Date(),
        },
    ];
    private nortificationsStudent: Notifications_Students[] = [];
    async isMyCourse(data: IDeleteCourseDTO): Promise<boolean> {
        const myCourse = this.coursesProducer.some(e => e.producerId === data.producerId);
        return myCourse;
    };
    async delete(data: IDeleteCourseDTO): Promise<Courses_Producer> {
        const setDateForDelete = this.coursesProducer.filter(e => e.id == data.courseId);
        if(setDateForDelete[0].delDate != null){
            throw new Error(`Curso já programado para deleção no dia ${setDateForDelete[0].delDate}`);
        };
        const setDate = setDateForDelete[0].delDate = dayjs().format('DD/MM/YYYY');
        const isMyCourseStudent = this.coursesStudent.filter(e => e.coursesId == data.courseId);
        if(isMyCourseStudent != null || isMyCourseStudent != undefined){
           const sendNotificationStudent = this.nortificationsStudent.push(
            {
                id:'342',
                title:'Aviso de Deleção de curso',
                content:`O curso ${setDateForDelete[0].name} será deletado em 10 dias.`,
                read:false,
                studentId:isMyCourseStudent[0].studentCoursesId,
                timeLife:dayjs().format('DD/MM/YYYY'),
                createdAt:new Date(),
                updatedAt:new Date(),
            },
            ); 
        }
        return this.coursesProducer[0];
    };
};
