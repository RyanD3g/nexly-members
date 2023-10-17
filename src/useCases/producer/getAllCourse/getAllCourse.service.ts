import * as dayjs from 'dayjs';
import { Injectable } from "@nestjs/common";
import { GetAllCoursesImplementation } from "src/repositories/Producer/implementations/GetAllCourse.service";
import { IsDeleteCourseImplementation } from "src/repositories/anyone/implementations/IsDeleteCourse.service";

@Injectable()
export class getAllCoursesService {
    constructor(
        private implementation:GetAllCoursesImplementation,
        private isDeleteCourse:IsDeleteCourseImplementation,
    ){};
    async getAll(){
        const deleteCourse = await this.isDeleteCourse.isDelete(dayjs().format('YYYY-MM-DD'));
        const all = await this.implementation.getAll();
        return all;
    };
};
