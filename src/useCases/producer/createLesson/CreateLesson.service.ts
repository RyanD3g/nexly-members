import { Injectable } from "@nestjs/common";
import { CreateLessonImplementation } from "src/repositories/Producer/implementations/CreateLesson.service";
import { ICreateLesson } from "./CreateLesson.DTO";

@Injectable()
export class CreateLessonService {
    constructor(
        private implementation:CreateLessonImplementation,
    ){};

    async createLessonForModule(data:ICreateLesson){
        const create = await this.implementation.createLesson(data);
        return create;
    };
};
