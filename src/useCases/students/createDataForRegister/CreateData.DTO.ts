import { IsNotEmpty, IsNumberString, MinLength } from "class-validator";

export class IDataByStudent {
    studentId:string;

    name:string;

    lastname:string;

    @IsNumberString()
    phone_number?:string;

    @MinLength(11)
    cpf?:string;

    sex?:string;

    bio?:string;
};
