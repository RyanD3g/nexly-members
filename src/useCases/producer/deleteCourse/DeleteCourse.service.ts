import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DeleteCourseImplementation } from "../../../repositories/Producer/implementations/DeleteCourse.service";
import { DeleteCourseInMemory } from "../../../repositories/Producer/implementations/in-memory-database/deleteCourse.memory";
import { IDeleteCourseDTO } from "./DeleteCourse.DTO";

@Injectable()
export class DeleteCourseService {
    constructor(
        private inMemory:DeleteCourseInMemory,
        private implementation:DeleteCourseImplementation,
    ){};    
    async programDelete(data:IDeleteCourseDTO, isTest:boolean){
        if(isTest){
            const isMyCourseProducer = await this.inMemory.isMyCourse(data);
            if(!isMyCourseProducer){
                throw new Error('Esse curso não te pertence');
            };
            const programDate = await this.inMemory.delete(data);
            return programDate;
        }
        const isMyCourseProducer = await this.implementation.isMyCourse(data);
        if(!isMyCourseProducer){
            throw new HttpException('Esse curso não te pertence', HttpStatus.UNAUTHORIZED);
        };
        const programDate = await this.implementation.delete(data);
        return programDate;
    };
};
