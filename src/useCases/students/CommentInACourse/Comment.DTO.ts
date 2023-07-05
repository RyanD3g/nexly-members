import { IsNotEmpty } from "class-validator";

export class ICommentDTO {
    studentId:string;

    lessonId:string;

    courseId?:string;
    
    @IsNotEmpty()
    commentContent:string;
};
