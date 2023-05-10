import { IsNotEmpty } from "class-validator";

export class IUpdateAddress {
    producerId:string;
    
    addressId:string;
    
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
