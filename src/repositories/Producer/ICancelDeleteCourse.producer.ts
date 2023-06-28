import { Courses_Producer } from "@prisma/client";
import { ICancelDeleteCourseDTO } from "src/useCases/producer/cancelDeleteCourse/CancelDelete.DTO";

export abstract class ACancelDeleteCourse{
    abstract isExists(courseId:string): Promise<boolean | Courses_Producer>;
    abstract cancelDelete(data:ICancelDeleteCourseDTO): Promise<Object>;
};
