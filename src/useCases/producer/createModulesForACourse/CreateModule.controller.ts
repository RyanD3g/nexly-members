import { Body, Controller, Param, Post, Request } from "@nestjs/common";
import { CreateModuleService } from "./CreateModule.service";
import { ICreateModuleDTO } from "./CreateModule.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";

@Controller('module')
export class CreateModuleController {
    constructor(
        private service:CreateModuleService,
    ){};

    @Post('create/producer/:courseId')
    async createModuleBasedInACourse(
        isTest:boolean = false,
        @Body() body:ICreateModuleDTO,
        @Param('courseId') courseId?:string,
        @Request() req?:CustomRequest,
    ){
        const created = await this.service.createModuleBasedInCourse({
            name:body.name,
            description:body.description,
            duration:body.duration,
            courseId: courseId || body.courseId,
        }, isTest);

        return created;
    };
};
