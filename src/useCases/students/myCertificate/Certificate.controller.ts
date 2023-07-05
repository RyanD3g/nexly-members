import { Body, Controller, Get, Request } from "@nestjs/common";
import { CertificateService } from "./Certificate.service";
import { CustomRequest } from "src/interfaces/Request.interface";
import { IGetCertificatesDTO } from "./Certificate.DTO";

@Controller('courses')
export class CertificateController {
    constructor(
        private service:CertificateService,
    ){};

    @Get('completed')
    async handle_getMyCourses(
        @Body() body?:IGetCertificatesDTO,
        isTest:boolean = false,
        @Request() req?:CustomRequest,
    ){
        const mycourses = await this.service.getCoursesCompleted({ studentId:req?.studentId || body.studentId }, isTest);
        return mycourses;
    };
};
