import { IsNotEmpty } from "class-validator";

export class IAddMaterialInLessonDTO {
    lessonId:string;

    @IsNotEmpty()
    urlMaterial:string;
};
