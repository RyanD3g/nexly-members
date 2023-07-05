import { Controller, Get, Request } from "@nestjs/common";
import { myCourseService } from "./myCourse.service";
import { CustomRequest } from "src/interfaces/Request.interface";

@Controller('courses')
export class getMyCoursesController {
    constructor(
        private service:myCourseService,
    ){};
    @Get('list-my-courses/student')
    async myCourses(
        isTest:boolean = false,
        @Request() req?:CustomRequest,
    ){
        const my = await this.service.getAllMyCourses({
            studentId:req?.studentId,
        }, isTest);
        return my;
    };
};
