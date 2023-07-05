import { Controller, Post, Body } from "@nestjs/common";
import { ValidateCodeAndDateService } from "./ValidateCode.service";
import { IValidateCodeAndDateDTO } from "./ValidateCode.DTO";

@Controller('validatePass')
export class ValidateCodeAndDateController {
    constructor(
        private service:ValidateCodeAndDateService,
    ){};

    @Post('student')
    async handle_validate(@Body() body:IValidateCodeAndDateDTO){
        try {
            const validate = await this.service.handle_validate(body);
            return validate;
        } catch (error) {
            return error;
        };
    };
};
