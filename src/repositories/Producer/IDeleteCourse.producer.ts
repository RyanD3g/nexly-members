import { Courses_Producer } from "@prisma/client";
import { IDeleteCourseDTO } from "src/useCases/producer/deleteCourse/DeleteCourse.DTO";

export abstract class ADeleteCourse {
    abstract isMyCourse(data:IDeleteCourseDTO): Promise<boolean>;
    abstract delete(data:IDeleteCourseDTO): Promise<Courses_Producer>;
};
