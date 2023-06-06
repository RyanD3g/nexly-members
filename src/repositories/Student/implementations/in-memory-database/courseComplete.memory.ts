import { Injectable } from "@nestjs/common";
import { ACourseComplete } from "../../ICourseComplete.student";
import { ICompleteCourseDTO } from "../../../../useCases/students/courseComplete/CourseComplete.DTO";
import { Courses_Producer, Courses_Student } from "@prisma/client";

@Injectable()
export class CourseCompleteInMemory implements ACourseComplete {
    private coursesStudent: Courses_Student[] = [
        {
            id:'123',
            coursesId:'456',
            completed:false,
            lastSeen:'43:76:00',
            studentCoursesId:'4334',
            createdAt:new Date(),
            updatedAt:new Date(),
        },
    ];
    private CoursesModel: Courses_Producer[] = [
        {
            id:'456',
            name:'Javascript Fullstack',
            description:'Exemplo de descrição',
            categorysTag:['T.I', 'Programação'],
            cretificate:true,
            duration:'23h',
            urlThumbCourse:'Teste.com',
            producerId:'4343',
            createdAt:new Date(),
            updatedAt:new Date(),
        },
    ];
    async isExists(courseId: string): Promise<boolean> {
        const isExistsOrNo = await this.CoursesModel.some(e => e.id == courseId);
        return isExistsOrNo;
    }
    async complete(data: ICompleteCourseDTO): Promise<Courses_Student> {
        const changeComplete = await this.coursesStudent.filter(e => e.coursesId === data.courseId);
        const completedSuccess = changeComplete[0].completed = true;
        return this.coursesStudent[0];
    };
};
