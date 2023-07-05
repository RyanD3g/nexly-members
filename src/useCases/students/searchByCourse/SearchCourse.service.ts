import { Injectable } from "@nestjs/common";
import { SearchCourseImplementation } from "../../../repositories/Student/implementations/FindForCourse.service";
import { SearchCourseInMemory } from "../../../repositories/Student/implementations/in-memory-database/findForCourse.memory";
import { ISearchDTO } from "./SearchCourse.DTO";

@Injectable()
export class SearchCourseService {
    constructor(
        private implementation:SearchCourseImplementation,
        private inMemory:SearchCourseInMemory,
    ){};
    async searched(data:ISearchDTO, isTest:boolean){
        if(isTest){
            const searchInMemory = await this.inMemory.find(data);
            return searchInMemory;
        };
        const search = await this.implementation.find(data);
        return search;
    };
};
