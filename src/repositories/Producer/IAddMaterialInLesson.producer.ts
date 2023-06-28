import { Movies_Modules } from "@prisma/client";
import { IAddMaterialInLessonDTO } from "src/useCases/producer/addMaterialInLesson/AddMaterial.DTO";

export abstract class AAddMaterialInLesson {
    abstract isExistsLesson(lessonId:string): Promise<boolean | Movies_Modules>;
    abstract addMaterial(data:IAddMaterialInLessonDTO): Promise<Movies_Modules | void>;
};
