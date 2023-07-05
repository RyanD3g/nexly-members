import { IsNotEmpty } from "class-validator";

export class IChangePasswordDTO {
    studentId:string;
    
    @IsNotEmpty()
    newPassword:string;

    @IsNotEmpty()
    confirmNewPassword:string;
};
