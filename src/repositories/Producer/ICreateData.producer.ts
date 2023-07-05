import { Producer } from "@prisma/client";
import { IDataByProducer } from "src/useCases/producer/createDataForRegister/CreateData.DTO";

export abstract class ACreateDataForRegister {
    abstract findByPhone(phone:string): Promise<Producer>;
    abstract findByIdentity(identity:string): Promise<Producer>;
    abstract create(data:IDataByProducer): Promise<Object>;
};
