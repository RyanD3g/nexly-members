import { Body, Controller, Delete, Param, Request } from "@nestjs/common";
import { DeleteCourseService } from "./DeleteCourse.service";
import { IDeleteCourseDTO } from "./DeleteCourse.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";

@Controller('delete')
export class DeleteCourseController {
    constructor(
        private service:DeleteCourseService,
    ){};

    @Delete('course/:courseId')
    async deleteCourse(
        @Body() body:IDeleteCourseDTO,
        isTest:boolean = false,
        @Param('courseId') courseId?:string,
        @Request() req?:CustomRequest,
    ){
        try {
            const programingDelete = await this.service.programDelete({
                courseId: courseId || body.courseId,
                producerId: req?.producerId || body.producerId,
            }, isTest);
            return programingDelete;
        } catch (error) {
            return error;
        };
    };
};
