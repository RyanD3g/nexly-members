import { IsNotEmpty } from "class-validator";

export class IChangeFavoriteDTO {
    studentId:string;

    @IsNotEmpty()
    lessonId:string;

    @IsNotEmpty()
    lessonName:string;
}; 
