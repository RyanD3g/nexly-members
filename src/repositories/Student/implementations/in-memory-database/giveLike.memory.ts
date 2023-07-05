import { Injectable } from "@nestjs/common";
import { AGiveLike } from "../../IGiveLike.producer";
import { IGiveLikeDTO } from "../../../../useCases/students/giveLike/GiveLike.DTO";
import { Movies_Modules } from "@prisma/client";

@Injectable()
export class GiveLikeInMemory implements AGiveLike {
    private LessonModel___InMemory: Movies_Modules[] = [{
        id:'123',
        name:'Teste de aula',
        description:'Aula tal',
        urlMovie:'Lesson.aws.com',
        urlMaterial:'material.com',
        duration:'30min',
        like:0,
        moduleId:'456',
        createdAt:new Date(),
        updatedAt:new Date(),
    }]
    
    async isExists(courseId: string): Promise<Boolean> {
        const findIsExists = await this.LessonModel___InMemory.some(
            e =>{
                return e.id === courseId
            },
        );
        return findIsExists;
    }
    async like(data: IGiveLikeDTO): Promise<Object> {
        const liked = await this.LessonModel___InMemory.filter(
            e => e.id == data.lessonId
        );
        liked[0].like = + 1;

        return liked[0].like;
    };
};
