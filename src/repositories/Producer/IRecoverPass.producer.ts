import { IRecoverDto } from "src/useCases/students/recoverPass/RecoverPassStudent.DTO";

export abstract class ARecoverPassProducer{
    abstract sendEmail(email:IRecoverDto): Promise<Object>;
};
