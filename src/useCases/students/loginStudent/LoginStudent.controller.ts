import { Body, Controller, Post } from "@nestjs/common";
import { ILoginStudent } from "./LoginStudent.DTO";
import { LoginStudentService } from "./LoginStudent.service";

@Controller('student')
export class LoginStudentController {
    constructor(
        private service:LoginStudentService,
    ){};

    @Post('login')
    async handle_login(@Body() body:ILoginStudent){
        try {
            const loginStudent = await this.service.handleUp_data_for_Repository(body);
            return loginStudent;
        } catch (error) {
            return error;
        };
    };
};
