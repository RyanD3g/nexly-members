import { IsNotEmpty } from "class-validator";

export class IToWatchLessonDTO {
    studentId?:string;
    courseId?:string;

    @IsNotEmpty()
    lessonId:string;

    @IsNotEmpty()
    quality:string;

    @IsNotEmpty()
    speed:number;
};
