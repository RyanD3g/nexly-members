import { Body, Controller, Post } from "@nestjs/common";
import { RegisterStudentService } from "./RegisterStudent.service";
import { IRegisterStudent } from "./RegisterStudent.DTO";

@Controller('student')
export class RegisterStudentController {
    constructor(
        private service:RegisterStudentService,
    ){};

    @Post('register')
    async createStudent(@Body() body:IRegisterStudent){
        try{
            const created = await this.service.createStudentInDataBase(body);
            return created;
        }catch(error){
            return error;
        };
    };
};
