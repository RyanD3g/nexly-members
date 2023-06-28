import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { PrismaService } from "src/database";
import { UnfavoriteLessonImplementation } from "src/repositories/Student/implementations/UnfavoriteLesson.service";
import { UnfavoriteLessonInMemory } from "src/repositories/Student/implementations/in-memory-database/unfavoriteLesson.memory";
import { UnfavoriteService } from "./Unfavorite.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { UnfavoriteLessonController } from "./Unfavorite.controller";

@Module({
    imports: [],
    controllers: [UnfavoriteLessonController],
    providers:[
        PrismaService,
        UnfavoriteLessonImplementation,
        UnfavoriteLessonInMemory,
        UnfavoriteService,
        IsJwtMiddleware,
    ],
})
export class UnfavoriteModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
                .forRoutes('unfavorite/lesson');
    };
};
