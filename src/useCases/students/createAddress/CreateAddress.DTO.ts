import { IsNotEmpty, IsNumberString, MinLength } from "class-validator";

export class IAddressByStudent {
    studentId:string;

    @IsNotEmpty()
    codeStreet:string;

    @IsNotEmpty()
    street:string;

    @IsNotEmpty()
    number:string;

    @IsNotEmpty()
    complement:string;

    @IsNotEmpty()
    city:string;
    
    @IsNotEmpty()
    uf:string
};
