import { Address_By_Student, Student } from "@prisma/client";
import { IFullStudent } from "src/useCases/students/getFullStudent/FullStudent.DTO";

export abstract class AFullStudent {
    abstract isComplete(data:IFullStudent): Promise<Address_By_Student>;
    abstract getAllDataStudent(data:IFullStudent): Promise<Student>;
};
