import { ICreateCourse } from "src/useCases/producer/createACourse/CreateCourse.DTO";

export abstract class ACreateCourse {
    abstract createCourseAndTags(dataForCourse:ICreateCourse): Promise<Object>;
};
