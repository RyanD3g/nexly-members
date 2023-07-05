import { Injectable } from "@nestjs/common";
import { AFavoriteLesson } from "../../IFavoriteLesson.student";
import { IChangeFavoriteDTO } from "../../../../useCases/students/changeFavoriteLesson/ChangeFavorite.DTO";
import { Favorites } from '@prisma/client';
@Injectable()
export class FavoriteLessonInMemory implements AFavoriteLesson {
    private favoriteLesson__InMemory: Favorites[] = [];
    async changeLesson(data: IChangeFavoriteDTO): Promise<Object> {
        const setFavorite = this.favoriteLesson__InMemory.push({
            id:'123',
            nameLesson:data.lessonName,
            lessonId:data.lessonId,
            studentId:'123',
            createdAt:new Date(),
            updatedAt:new Date(),
        });
        return { favorited: true };
    };
};
