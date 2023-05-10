import { Injectable } from "@nestjs/common";
import { CreateCourseImplementation } from "../../../repositories/Producer/implementations/CreateCourse.service";
import { ICreateCourse } from "./CreateCourse.DTO";
import { CreateCourseInMemory } from "../../../repositories/Producer/implementations/in-memory-database/createCourse.memory";

@Injectable()
export class CreateCourseService {
    constructor(
        private implementation:CreateCourseImplementation,
        private inMemory:CreateCourseInMemory,
    ){};

    async createCourse(data:ICreateCourse, isTest:boolean){
        if(!isTest){
            const created = await this.implementation.createCourseAndTags(data);
            return created;
        }
        const created = await this.inMemory.createCourseAndTags(data);
        return created;
    };
};
