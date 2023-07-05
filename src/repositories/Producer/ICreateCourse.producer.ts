import { Courses_Producer, Producer } from "@prisma/client";
import { ICreateCourse } from "src/useCases/producer/createACourse/CreateCourse.DTO";

export abstract class ACreateCourse {
    abstract createCourseAndTags(dataForCourse:ICreateCourse): Promise<Producer | Object>
};
