import { Injectable } from "@nestjs/common";
import { AFindForCourse } from "../../IFindForCourse.student";
import { Courses_Producer } from "@prisma/client";
import { ISearchDTO } from "../../../../useCases/students/searchByCourse/SearchCourse.DTO";

@Injectable()
export class SearchCourseInMemory implements AFindForCourse{
    private courseModel__InMemory: Courses_Producer[] = [{
        id:'123',
        name:'Teste de nome',
        description:'Teste de descrição',
        cretificate:true,
        duration: '10h',
        categorysTag:["teste de tag"],
        producerId:'1234',
        urlThumbCourse:'urlThumb.com',
        createdAt:new Date(),
        updatedAt:new Date(),
    }];
    async find(data: ISearchDTO): Promise<Courses_Producer[]> {
        const findForCourseInMemory = await this.courseModel__InMemory.filter(
            e => e.name == data.filterForCourseName || e.categorysTag[0] == data.filterForTag || e.producerId == data.filterForProducer
        );
        if(!findForCourseInMemory){
            throw new Error('Curso não encontrado');
        };
        return findForCourseInMemory;
    };
};
