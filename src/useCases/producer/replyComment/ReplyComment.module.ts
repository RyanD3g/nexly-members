import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { ReplyCommentController } from "./ReplyComment.controller";
import { ReplyCommentImplementation } from "src/repositories/Producer/implementations/ReplyComment.service";
import { ReplyCommentInMemory } from "src/repositories/Producer/implementations/in-memory-database/replyComment.memory";
import { ReplyCommentService } from "./ReplyComment.service";
import { PrismaService } from "src/database";
import { IsDeleteCourseImplementation } from "src/repositories/anyone/implementations/IsDeleteCourse.service";

@Module({
    imports: [],
    controllers:[ReplyCommentController],
    providers: [
        PrismaService,
        ReplyCommentImplementation,
        ReplyCommentInMemory,
        ReplyCommentService,
        IsDeleteCourseImplementation,
        IsJwtMiddleware,
    ],
})
export class ReplyCommentModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
            .forRoutes('reply/comment');
    };
};
