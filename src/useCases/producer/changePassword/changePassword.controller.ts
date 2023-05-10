import { Body, Controller, Put, Request } from "@nestjs/common";
import { ChangePasswordService } from "./changePassword.service";
import { IChangePasswordDTO } from "./changePassword.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";

@Controller('changePassword')
export class ChangePasswordController {
    constructor(
        private service:ChangePasswordService,
    ){};

    @Put('producer')
    async handle_changed(@Body() body:IChangePasswordDTO, @Request() req:CustomRequest){
        try {
            const changed = await this.service.changedPassword({
            producerId:req.producerId,
            newPassword:body.newPassword,
            confirmNewPassword: body.confirmNewPassword,
          });
          return changed;
        } catch (error) {
            return error;
        };
    };
};
