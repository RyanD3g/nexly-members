import { Injectable } from "@nestjs/common";
import { AUnfavoriteLesson } from "../IUnfavorite.producer";
import { Favorites } from "@prisma/client";
import { IUnfavoriteDTO } from "../../../useCases/students/unfavoriteLesson/Unfavorite.DTO";
import { PrismaService } from "../../../database";

@Injectable()
export class UnfavoriteLessonImplementation implements AUnfavoriteLesson {
    constructor(
        private prisma:PrismaService,
    ){};
    async isExists(favoriteId: string): Promise<Favorites> {
        const isExistsLesson = await this.prisma.favorites.findUnique({
            where:{ id:favoriteId, },
        });
        return isExistsLesson;
    };
    async unfavorite(data: IUnfavoriteDTO): Promise<Object> {
        const unfavoriteLesson = await this.prisma.favorites.deleteMany({
            where:{ id:data.favoriteId, },
        });
        await this.prisma.$disconnect();
        return { deleted:true };
    };
};
