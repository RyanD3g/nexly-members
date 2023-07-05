import { IsNotEmpty } from "class-validator";

export class IChangePasswordDTO {
    producerId:string;
    
    @IsNotEmpty()
    newPassword:string;

    @IsNotEmpty()
    confirmNewPassword:string;
};
