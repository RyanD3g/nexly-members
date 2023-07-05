import { IValidateCodeAndDateDTO } from "src/useCases/students/validateCode/ValidateCode.DTO";

export abstract class AValidateCodeAndDate {
    abstract validate(data:IValidateCodeAndDateDTO): Promise<Object>;
};
