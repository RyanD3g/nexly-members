import { Student } from "@prisma/client";
import { IDataByStudent } from "src/useCases/students/createDataForRegister/CreateData.DTO";

export abstract class ACreateDataForRegister {
    abstract create(data:IDataByStudent): Promise<Object>;
};
