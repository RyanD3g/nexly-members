import { Body, Controller, Put, Request } from "@nestjs/common";
import { DeleteAccountStudentService } from "./DeleteAccount.service";
import { IDeleteAccountStudentDTO } from "./DeleteAccount.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";

@Controller('delete')
export class DeleteAccountStudentController {
    constructor(
        private service:DeleteAccountStudentService,
    ){};

    @Put('account/student')
    async handleDelete(
        @Body() body?:IDeleteAccountStudentDTO,
        isTest:boolean = false,
        @Request() req?:CustomRequest,
    ){
        try {
            const sendDelete = await this.service.solicitationDelete({
                studentId:req?.producerId || body.studentId,
            }, isTest);
            return sendDelete;
        } catch (error) {
            return error;
        };
    };
};
