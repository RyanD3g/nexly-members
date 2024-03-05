import { Courses_Producer, Student } from "@prisma/client";
import { INewMemberDTO } from "src/useCases/producer/addMember/NewMember.DTO";

export abstract class ANewMember {
    abstract createNewMember(data:INewMemberDTO, id:string): Promise<Courses_Producer> | void;
    abstract memberExists(idUser:string): Promise<Student | void>;
};
