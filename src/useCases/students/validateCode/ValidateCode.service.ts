import { Injectable } from "@nestjs/common";
import { ValidateCodeImplementation } from "../../../repositories/Student/implementations/ValidateCode.service";
import { IValidateCodeAndDateDTO } from "./ValidateCode.DTO";

@Injectable()
export class ValidateCodeAndDateService {
    constructor(
        private implementation:ValidateCodeImplementation,
    ){};

    async handle_validate(data:IValidateCodeAndDateDTO){
        const date_day = new Date().getDay();
        const date_month = new Date().getMonth();
        const date_year = new Date().getFullYear();
        const isValidate = await this.implementation.validate({
            code:data.code,
            codeDate: `${date_day}/${date_month}/${date_year}`,
        });

        return isValidate;
    };
};
