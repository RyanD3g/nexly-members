import { IsNotEmpty } from "class-validator";

export class ICommentDTO {
    studentId:string;

    lessonId:string;
    
    @IsNotEmpty()
    commentContent:string;
};
