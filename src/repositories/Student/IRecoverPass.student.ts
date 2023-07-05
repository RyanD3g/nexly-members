import { IRecoverDto } from "src/useCases/students/recoverPass/RecoverPassStudent.DTO";

export abstract class ARecoverPassStudent {
    abstract sendEmail(email:IRecoverDto): Promise<Object>;
};
