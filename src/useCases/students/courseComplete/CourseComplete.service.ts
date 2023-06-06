import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CompleteCourseImplementation } from "../../../repositories/Student/implementations/CompleteCourse.service";
import { CourseCompleteInMemory } from "../../../repositories/Student/implementations/in-memory-database/courseComplete.memory";
import { ICompleteCourseDTO } from "./CourseComplete.DTO";

@Injectable()
export class CourseCompleteService {
    constructor(
        private implementation:CompleteCourseImplementation,
        private inMemory:CourseCompleteInMemory,
    ){};

    async completed(data:ICompleteCourseDTO, isTest:boolean){
        if(isTest){
            const youCourseExists = await this.inMemory.isExists(data.courseId);
            if(!youCourseExists){
                throw new Error('Curso inexistente!!');
            };
            const handleComplete = await this.inMemory.complete(data);
            return handleComplete;
        }
        const youCourseExists = await this.implementation.isExists(data.courseId);
        if(!youCourseExists){
            throw new HttpException('Curso inexistente!!', HttpStatus.BAD_REQUEST);
        };
        const handleComplete = await this.implementation.complete(data);
        return handleComplete;
    };
};
