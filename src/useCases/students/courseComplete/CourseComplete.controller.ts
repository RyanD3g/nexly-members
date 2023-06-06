import { Body, Controller, Get, Param, Put, Request } from "@nestjs/common";
import { CourseCompleteService } from "./CourseComplete.service";
import { ICompleteCourseDTO } from "./CourseComplete.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";

@Controller('complete')
export class CourseCompleteController {
    constructor(
        private service:CourseCompleteService,
    ){};

    @Put('course/:courseId')
    async completeCourse(
        @Body() body:ICompleteCourseDTO,
        isTest:boolean = false,
        @Param('courseId') courseId?:string,
        @Request() req?:CustomRequest,
    ){
        try {
            const handleComplete = await this.service.completed({
                courseId: courseId || body.courseId,
                courseStudentId:body.courseStudentId,
                studentId:req?.studentId || body.studentId,
            }, isTest);
            return handleComplete;
        } catch (error) {
            return error;
        };
    };
};
