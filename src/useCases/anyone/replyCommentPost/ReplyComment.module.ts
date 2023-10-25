import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ReplyCommentPostController } from "./ReplyComment.controller";
import { PrismaService } from "src/database";
import { ReplyCommentPostImplementation } from "src/repositories/anyone/implementations/ReplyCommentPost.service";
import { ReplyCommentPostInMemory } from "src/repositories/anyone/implementations/in-memory-database/replyCommentPost.memory";
import { ReplyCommentPostService } from "./ReplyComment.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";

@Module({
    controllers: [ReplyCommentPostController],
    providers: [
        PrismaService,
        ReplyCommentPostImplementation,
        ReplyCommentPostInMemory,
        ReplyCommentPostService,
        IsJwtMiddleware,
    ],
})
export class ReplyCommentPostModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
                .forRoutes('reply/comment/post');
    };
};
