import { Injectable } from "@nestjs/common";
import { AUnfavoriteLesson } from "../../IUnfavorite.producer";
import { Favorites } from "@prisma/client";
import { IUnfavoriteDTO } from "../../../../useCases/students/unfavoriteLesson/Unfavorite.DTO";

@Injectable()
export class UnfavoriteLessonInMemory implements AUnfavoriteLesson {
    private FavoritesModel: Favorites[] = [
        {
            id:'123',
            nameLesson:'Teste de nome',
            lessonId:'342',
            studentId:'43543',
            createdAt:new Date(),
            updatedAt:new Date(),
        },
    ];
    async isExists(favoriteId: string): Promise<boolean | Favorites> {
        const isExistsLesson = this.FavoritesModel.some(e => e.id == favoriteId);
        return isExistsLesson;
    };
    async unfavorite(data: IUnfavoriteDTO): Promise<Object> {
        const unfavoriteLesson = this.FavoritesModel.filter(e => e.id === data.favoriteId);
        delete this.FavoritesModel[0];
        console.log(this.FavoritesModel);
        return this.FavoritesModel;
    };
};
