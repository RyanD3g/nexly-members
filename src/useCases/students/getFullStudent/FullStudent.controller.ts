import { Controller, Get, Request } from "@nestjs/common";
import { getDataAndValidateFullStudentService } from "./FullStudent.service";
import { CustomRequest } from "../../../interfaces/Request.interface";

@Controller('profile')
export class getDataFullStudentController {
    constructor(
        private service:getDataAndValidateFullStudentService,
    ){};

    @Get('student/all')
    async getFullStudent(@Request() req?:CustomRequest){
            const geted = await this.service.validate_and_get({
                studentId:req.studentId,
            });
            return geted;
    };
};
