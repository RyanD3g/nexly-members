import { IsEmail, IsNotEmpty, IsNumberString } from "class-validator"

export class IRegisterProducer {
     @IsNotEmpty()
     @IsEmail()
     email:string;

     @IsNotEmpty()
     password:string;

     @IsNotEmpty()
     confirmPassword?:string;
};
