import { Body, Controller, Put, Request } from "@nestjs/common";
import { DeleteAccountService } from "./DeleteAccount.service";
import { IDeleteAccountDTO } from "./DeleteAccount.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";

@Controller('delete')
export class DeleteAccountController {
    constructor(
        private service:DeleteAccountService,
    ){};

    @Put('account/producer')
    async handleDelete(
        @Body() body?:IDeleteAccountDTO,
        isTest:boolean = false,
        @Request() req?:CustomRequest,
    ){
        try {
            const sendDelete = await this.service.solicitationDelete({
                producerId:req?.producerId || body.producerId,
            }, isTest);
            return sendDelete;
        } catch (error) {
            return error;
        };
    };
};
