import { Body, Controller, Post, Request, UploadedFile, UseInterceptors } from "@nestjs/common";
import { CreateCourseService } from "./CreateCourse.service";
import { ICreateCourse } from "./CreateCourse.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('course')
export class CreateCourseController {
    constructor(
        private service:CreateCourseService,
    ){};

    @Post('create/producer')
    @UseInterceptors(FileInterceptor('file'))
    async createCourseC( @UploadedFile() file?, isTest:boolean = false, @Body() body?:ICreateCourse, @Request() req?:CustomRequest){
        console.log(`S3 MULTER: ${file}`)
        const created = await this.service.createCourse({
            categorysTag:body.categorysTag,
            description:body.description,
            duration:body.duration,
            name:body.name,
            urlThumbCourse:file?.location,
            certificate:body.certificate,
            producerId:req?.producerId || body.producerId,
        }, isTest);

        return created;
    };
};
