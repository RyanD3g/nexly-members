import { HttpException, Injectable } from "@nestjs/common";
import { UnfavoriteLessonImplementation } from "../../../repositories/Student/implementations/UnfavoriteLesson.service";
import { UnfavoriteLessonInMemory } from "../../../repositories/Student/implementations/in-memory-database/unfavoriteLesson.memory";
import { IUnfavoriteDTO } from "./Unfavorite.DTO";

@Injectable()
export class UnfavoriteService {
    constructor(
        private inMemory:UnfavoriteLessonInMemory,
        private implementation:UnfavoriteLessonImplementation,
    ){};
    async unfavoriteAndExists(data:IUnfavoriteDTO, isTest:boolean){
        if(isTest){
            const isExistsLesson = await this.inMemory.isExists(data.favoriteId);
            if(!isExistsLesson){
                throw new Error('Aula inexistente!');
            }
            const unfavorite = await this.inMemory.unfavorite(data);
            return unfavorite;
        };
        const isExistsLesson = await this.implementation.isExists(data.favoriteId);
        if(!isExistsLesson){
            throw new HttpException('Aula inexistente!', 404);
        };
        const unfavorite = await this.implementation.unfavorite(data);
        return unfavorite;
    };
};
