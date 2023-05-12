import { IChangeFavoriteDTO } from "src/useCases/students/changeFavoriteLesson/ChangeFavorite.DTO";

export abstract class AFavoriteLesson {
    abstract changeLesson(data:IChangeFavoriteDTO): Promise<Object>;
};
