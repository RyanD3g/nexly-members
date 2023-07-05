import { IsNotEmpty } from "class-validator";

export class IRecoverDto {
    @IsNotEmpty()
    email:string;

    code?:string;
    codeDate?:string;
};
