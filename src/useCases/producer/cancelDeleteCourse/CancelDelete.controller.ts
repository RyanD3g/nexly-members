import { Body, Controller, Param, Put, Request } from "@nestjs/common";
import { CancelDeleteCourseService } from './CancelDelete.service';
import { ICancelDeleteCourseDTO } from "./CancelDelete.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";
@Controller('cancel')
export class CancelDeleteCourseController {
    constructor(
        private service:CancelDeleteCourseService,
    ){};
    @Put('delete/course/:courseId')
    async cancel(
        @Body() body:ICancelDeleteCourseDTO,
        isTest:boolean = false,
        @Request() req?:CustomRequest,
        @Param('courseId') courseId?:string,
    ){
        try {
            const cancelDelete = await this.service.deleteCourse({
                courseId: courseId || body.courseId,
                producerId: req?.producerId || body.producerId,
            }, isTest);
            return cancelDelete;
        } catch (error) {
            return error;
        };
    };
};
