import { Injectable } from "@nestjs/common";
import { GetAllCoursesImplementation } from "src/repositories/Producer/implementations/GetAllCourse.service";

@Injectable()
export class getAllCoursesService {
    constructor(
        private implementation:GetAllCoursesImplementation,
    ){};
    async getAll(){
        const all = await this.implementation.getAll();
        return all;
    };
};
