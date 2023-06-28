import { Student } from "@prisma/client";
import { IDeleteAccountStudentDTO } from "src/useCases/students/setDateForDelete/DeleteAccount.DTO";

export abstract class ADeleteAccountStudent {
    abstract isSetDelete(studentId:string): Promise<boolean | Student>;
    abstract deleteAccount(data:IDeleteAccountStudentDTO): Promise<Object | Student>;
};
