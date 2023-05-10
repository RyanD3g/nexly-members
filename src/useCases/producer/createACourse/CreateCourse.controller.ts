import { Body, Controller, Post, Request } from "@nestjs/common";
import { CreateCourseService } from "./CreateCourse.service";
import { ICreateCourse } from "./CreateCourse.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";

@Controller('course')
export class CreateCourseController {
    constructor(
        private service:CreateCourseService,
    ){};

    @Post('create/producer')
    async createCourseC(isTest:boolean = false, @Body() body:ICreateCourse, @Request() req?:CustomRequest){
        const created = await this.service.createCourse({
            categorysTag:body.categorysTag,
            description:body.description,
            duration:body.duration,
            name:body.name,
            urlThumbCourse:body.urlThumbCourse,
            certificate:body.certificate,
            producerId:req?.producerId || body.producerId,
        }, isTest);

        return created;
    };
};
