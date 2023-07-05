import { IChangePasswordDTO } from "src/useCases/students/changePassword/changePassword.DTO";

export abstract class AChangePasswordStudent {
    abstract changePassword(data:IChangePasswordDTO): Promise<Object>;
};
