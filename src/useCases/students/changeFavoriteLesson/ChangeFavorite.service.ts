import { Injectable } from "@nestjs/common";
import { FavoriteLessonImplementation } from "../../../repositories/Student/implementations/FavoriteLesson.service";
import { FavoriteLessonInMemory } from "../../../repositories/Student/implementations/in-memory-database/favoriteLesson.memory";
import { IChangeFavoriteDTO } from "./ChangeFavorite.DTO";

@Injectable()
export class ChangeFavoriteService {
    constructor(
        private implementation:FavoriteLessonImplementation,
        private inMemory:FavoriteLessonInMemory,
    ){};
    async changedLesson(data:IChangeFavoriteDTO, isTest:boolean){
        if(isTest){
            const changeTest = await this.inMemory.changeLesson(data);
            return changeTest;
        };

        const changeReal = await this.implementation.changeLesson(data);
        return changeReal;
    };
};
