import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ChangePasswordImplementation } from "../../../repositories/Producer/implementations/ChangePassword.service";
import { IChangePasswordDTO } from "./changePassword.DTO";

@Injectable()
export class ChangePasswordService {
    constructor(
        private implementation:ChangePasswordImplementation,
    ){};

    async changedPassword(data:IChangePasswordDTO){
        if(data.confirmNewPassword !== data.newPassword){
            throw new HttpException('Senhas não batem!!', HttpStatus.BAD_REQUEST);
        };
        const newPass = await this.implementation.changePassword({
            confirmNewPassword:data.confirmNewPassword,
            newPassword:data.newPassword,
            producerId:data.producerId,
        });
        return newPass;
    };
};
