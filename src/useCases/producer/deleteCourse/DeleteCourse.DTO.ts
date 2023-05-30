import { IsNotEmpty } from "class-validator";

export class IDeleteCourseDTO {
    @IsNotEmpty()
    courseId:string;
};
