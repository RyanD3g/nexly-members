import { IsNotEmpty, IsNumberString, MinLength } from "class-validator";

export class IAddressByProducer {
    producerId:string;

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
