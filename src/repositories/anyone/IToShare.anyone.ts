import { Posts, Producer, Student } from "@prisma/client";
import { IToShareDTO } from "src/useCases/anyone/toShare/ToShare.DTO";

export abstract class AToSharePost {
    abstract sharePost(data:IToShareDTO, isStudent:boolean): Promise<Student | Producer | Posts> | Posts[];
};
