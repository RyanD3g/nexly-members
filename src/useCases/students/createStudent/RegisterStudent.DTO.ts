import { IsEmail, IsNotEmpty, IsNumberString } from "class-validator"

export class IRegisterStudent {
     @IsNotEmpty()
     @IsEmail()
     email:string;

     @IsNotEmpty()
     password:string;

     @IsNotEmpty()
     confirmPassword?:string;
};
