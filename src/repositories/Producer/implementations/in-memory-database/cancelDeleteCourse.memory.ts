import { Injectable } from "@nestjs/common";
import { ACancelDeleteCourse } from "../../ICancelDeleteCourse.producer";
import { ICancelDeleteCourseDTO } from "../../../../useCases/producer/cancelDeleteCourse/CancelDelete.DTO";
import { Courses_Producer } from "@prisma/client";

@Injectable()
export class CancelDeleteCourseInMemory implements ACancelDeleteCourse {
    private courseModel: Courses_Producer[] = [
        {
            id:'123',
            name:'Javascript FullStack',
            description:'Teste de descrição',
            cretificate:true,
            delDate:'10/11/2023',
            duration:'65h',
            urlThumbCourse:'teste.com',
            categorysTag:['T.I', 'Programação'],
            producerId:'234',
            createdAt:new Date(),
            updatedAt:new Date(),
        },
    ];
    async isExists(courseId: string): Promise<boolean> {
        const courseExists = await this.courseModel.some(e => e.id == courseId);
        return courseExists;
    };
    async cancelDelete(data: ICancelDeleteCourseDTO): Promise<Object> {
        const cancelDeleteCourse = this.courseModel.filter(e => e.id == data.courseId);
        cancelDeleteCourse[0].delDate = null;
        return this.courseModel[0];
    };
};
