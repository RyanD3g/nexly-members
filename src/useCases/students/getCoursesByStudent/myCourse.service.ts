import { Injectable } from "@nestjs/common";
import { getMyCoursesImplementation } from "../../../repositories/Student/implementations/GetMyCourse.service";
import { getMyCoursesInMemory } from "../../../repositories/Student/implementations/in-memory-database/getMyCourse.memory";
import { IMyCourseDTO } from "./myCourse.DTO";

@Injectable()
export class myCourseService {
    constructor(
        private implementation:getMyCoursesImplementation,
        private inMemory:getMyCoursesInMemory,
    ){};
    async getAllMyCourses(data:IMyCourseDTO, isTest:boolean){
        if(isTest){
            const getedTest = await this.inMemory.getCourses(data);
            return getedTest;
        };
        const getedInDB = await this.implementation.getCourses(data);
        return getedInDB;
    };
};
