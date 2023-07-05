import { IsNotEmpty, IsNumberString, MinLength } from "class-validator";

export class IDataByProducer {
    producerId:string;

    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    lastname:string;

    @IsNotEmpty()
    @IsNumberString()
    phone_number?:string;

    @IsNotEmpty()
    @MinLength(11)
    identity?:string;

    sex?:string;
};
