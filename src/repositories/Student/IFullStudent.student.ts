import { Address, Student } from "@prisma/client";
import { IFullStudent } from "src/useCases/students/getFullStudent/FullStudent.DTO";

export abstract class AFullStudent {
    abstract isComplete(data:IFullStudent): Promise<Address>;
    abstract getAllDataStudent(data:IFullStudent): Promise<Student>;
};
