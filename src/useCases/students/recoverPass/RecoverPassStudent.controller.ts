import { Body, Controller, Post } from "@nestjs/common";
import { RecoverPassStudentService } from "./RecoverPassStudent.service";
import { IRecoverDto } from "./RecoverPassStudent.DTO";

@Controller('recoverPass')
export class RecoverPassStudentController {
    constructor(
        private sevice:RecoverPassStudentService,
    ){};

    @Post('student')
    async handle_recover(@Body() body:IRecoverDto){
        try {
            const sendedRecover = await this.sevice.sendedEmail(body);
            return sendedRecover;
        } catch (error) {
            return error;
        };
    };
};
