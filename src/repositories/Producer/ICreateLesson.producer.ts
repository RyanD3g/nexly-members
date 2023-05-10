import { ICreateLesson } from "src/useCases/producer/createLesson/CreateLesson.DTO";

export abstract class ACreateLesson {
    abstract createLesson(data:ICreateLesson): Promise<Object>;
};
