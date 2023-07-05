import { Student } from "@prisma/client";
import { IDataByStudent } from "src/useCases/students/createDataForRegister/CreateData.DTO";

export abstract class ACreateDataForRegister {
    abstract findByPhone(phone:string): Promise<Student>;
    abstract findByIdentity(identity:string): Promise<Student>;
    abstract create(data:IDataByStudent): Promise<Object>;
};
