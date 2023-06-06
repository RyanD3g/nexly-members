import { Courses_Student } from "@prisma/client";
import { Response } from "express";
import { IToWatchLessonDTO } from "src/useCases/anyone/toWatchLesson/toWatchLesson.DTO";

export abstract class AToWatchLesson {
    abstract isMyCourse(data:IToWatchLessonDTO): Promise<boolean | Courses_Student>;
    abstract wacthCourse(data:IToWatchLessonDTO, res:Response);
};
