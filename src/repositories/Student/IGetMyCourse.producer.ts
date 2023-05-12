import { Courses_Student, Student } from "@prisma/client";
import { IMyCourseDTO } from "src/useCases/students/getCoursesByStudent/myCourse.DTO";

export abstract class AGetMyCourse {
    abstract getCourses(data:IMyCourseDTO): Promise<Courses_Student | Student>;
};
