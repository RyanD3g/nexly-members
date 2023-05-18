import { IsNotEmpty, IsNumberString, MinLength } from "class-validator";

export class IAddressByStudent {
    studentId:string;

    codeStreet:string;

    street:string;

    number:string;

    complement:string;

    city:string;
    
    uf:string
};
