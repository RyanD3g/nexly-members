import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { ChangeFavoriteController } from "./ChangeFavorite.controller";
import { PrismaService } from "src/database";
import { ChangeFavoriteService } from "./ChangeFavorite.service";
import { FavoriteLessonImplementation } from "src/repositories/Student/implementations/FavoriteLesson.service";
import { FavoriteLessonInMemory } from "src/repositories/Student/implementations/in-memory-database/favoriteLesson.memory";

@Module({
    imports: [],
    controllers: [ChangeFavoriteController],
    providers: [
        PrismaService,
        ChangeFavoriteService,
        FavoriteLessonImplementation,
        FavoriteLessonInMemory,
        IsJwtMiddleware,
    ],
})
export class ChangeFavoriteModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
                .forRoutes('change-favorite/lesson/student')
    };
};
