import { IChangePasswordDTO } from "src/useCases/producer/changePassword/changePassword.DTO";

export abstract class AChangePasswordProducer {
    abstract changePassword(data:IChangePasswordDTO): Promise<Object>;
};
