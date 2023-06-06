import { Courses_Producer, Courses_Student } from "@prisma/client";
import { ICompleteCourseDTO } from "src/useCases/students/courseComplete/CourseComplete.DTO";

export abstract class ACourseComplete {
    abstract isExists(courseId:string): Promise<Courses_Producer | boolean>;
    abstract complete(data:ICompleteCourseDTO): Promise<Courses_Student>;
};
