import { Student } from "@prisma/client";
import { IRegisterStudent } from "src/useCases/students/createStudent/RegisterStudent.DTO";

export abstract class ARegisterStudent {
    abstract findByEmal(email:string): Promise<Student>;
    abstract register(data:IRegisterStudent): Promise<Object>;
};
