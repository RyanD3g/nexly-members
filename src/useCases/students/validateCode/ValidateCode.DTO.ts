import { IsNotEmpty } from "class-validator";

export class IValidateCodeAndDateDTO {
    @IsNotEmpty()
    code:string;

    codeDate?:string;
};
