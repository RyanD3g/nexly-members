import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { PrismaService } from "src/database";
import { CommentInLessonImplementation } from "src/repositories/Student/implementations/Comment.service";
import { CommentInLessonService } from "./Comment.service";
import { CommentInMemory } from "src/repositories/Student/implementations/in-memory-database/comment.memory";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { CommentInLessonController } from "./Comment.controller";
import { IsDeleteCourseImplementation } from "src/repositories/anyone/implementations/IsDeleteCourse.service";

@Module({
    imports: [],
    controllers: [CommentInLessonController],
    providers: [
        PrismaService,
        CommentInLessonImplementation,
        CommentInLessonService,
        CommentInMemory,
        IsDeleteCourseImplementation,
        IsJwtMiddleware,
    ],
})
export class CommentInLessonModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
       consumer
        .apply(IsJwtMiddleware)
            .forRoutes('comment/lesson')
    };
};
