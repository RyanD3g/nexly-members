import { IDeleteMaterialLessonDTO } from "src/useCases/producer/deleteMaterial/DeleteMaterialLesson.DTO";

export abstract class ADeleteMaterialLesson {
    abstract deleteMaterial(data:IDeleteMaterialLessonDTO): Promise<Object>;
};
