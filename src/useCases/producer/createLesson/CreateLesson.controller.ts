import { Body, Controller, Param, Post, Request, UploadedFile, UseInterceptors } from "@nestjs/common";
import { CreateLessonService } from "./CreateLesson.service";
import { ICreateLesson } from "./CreateLesson.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('lesson')
export class CreateLessonController {
    constructor(
        private service:CreateLessonService,
    ){};
    @Post('create/producer/:moduleId')
    @UseInterceptors(FileInterceptor('movie'))
    async createdLesson(
        @Body() body:ICreateLesson,
        @Param('moduleId') moduleId:string,
        @UploadedFile() file,
    ){
        const created = await this.service.createLessonForModule({
            name:body.name,
            description:body.description,
            duration:body.duration,
            urlMovie:file.location,
            moduleId,
        });
        return created;
    };
};
