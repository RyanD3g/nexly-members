import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CancelDeleteCourseInMemory } from '../../../repositories/Producer/implementations/in-memory-database/cancelDeleteCourse.memory';
import { CancelDeleteCourseImplementation } from '../../../repositories/Producer/implementations/CancelDeleteCourse.service';
import { ICancelDeleteCourseDTO } from "./CancelDelete.DTO";
@Injectable()
export class CancelDeleteCourseService {
    constructor(
        private inMemory:CancelDeleteCourseInMemory,
        private implementation:CancelDeleteCourseImplementation,
    ){};
    async deleteCourse(data:ICancelDeleteCourseDTO, isTest:boolean){
        if(isTest){
            const courseExists = await this.inMemory.isExists(data.courseId);
            if(!courseExists){
                throw new Error('Curso inexistente!!');
            };
            const cancelDeleted = await this.inMemory.cancelDelete(data);
            return cancelDeleted;
        }
        const courseExists = await this.implementation.isExists(data.courseId);
        if(!courseExists){
            throw new HttpException('Curso inexistente!!', HttpStatus.NOT_FOUND);
        };
        const cancelDeleted = await this.implementation.cancelDelete(data);
        return cancelDeleted;
    };
};
