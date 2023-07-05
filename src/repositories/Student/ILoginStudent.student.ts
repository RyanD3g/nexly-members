import { ILoginStudent } from "src/useCases/students/loginStudent/LoginStudent.DTO";

export abstract class ALoginStudent {
    abstract login(dataForLogin:ILoginStudent): Promise<Object>;
};
