import { Body, Controller, Param, Post, Request } from "@nestjs/common";
import { BuyCourseService } from "./BuyCourse.service";
import { IBuyCourse } from "./BuyCourse.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";

@Controller('buy')
export class BuyCourseController {
    constructor(
        private service:BuyCourseService,
    ){};
    @Post('course/student/:courseId')
    async createChecoutForBuyCourse(
        isTest:boolean = false,
        @Body() body:IBuyCourse,
        @Request() req?:CustomRequest,
        @Param('courseId') courseId?:string,
    ){
        const buyed = await this.service.buyCourse({
            courseId: courseId,
            studentId:req?.studentId || body.studentId,
        }, isTest);
        return buyed;
    };
};
