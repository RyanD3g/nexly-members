import { Controller, Get } from "@nestjs/common";
import { getAllCoursesService } from "./getAllCourse.service";

@Controller('courses')
export class GetAllCoursesController {
    constructor(
        private service:getAllCoursesService,
    ){};

    @Get('all')
    async allGet(){
        const allCourses = await this.service.getAll();
        return allCourses;
    };
};
