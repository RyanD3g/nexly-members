import { Favorites } from "@prisma/client";
import { IUnfavoriteDTO } from "src/useCases/students/unfavoriteLesson/Unfavorite.DTO";

export abstract class AUnfavoriteLesson {
    abstract isExists(favoriteId:string): Promise<boolean | Favorites>;
    abstract unfavorite(data:IUnfavoriteDTO): Promise<Object>;
};
