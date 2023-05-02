import { IsNotEmpty, IsNumberString, MinLength } from "class-validator";

export class IDataByStudent {
    studentId:string;

    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    lastname:string;

    @IsNotEmpty()
    @IsNumberString()
    phone_number?:string;

    @IsNotEmpty()
    @MinLength(11)
    cpf?:string;

    sex?:string;

    bio?:string;
};
