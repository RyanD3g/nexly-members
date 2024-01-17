import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { DeleteCommentInPostController } from "./DeleteComment.controller";
import { PrismaService } from "src/database";
import { DeleteCommentInPostImplementation } from "src/repositories/anyone/implementations/DeleteCommentInPost.service";
import { DeleteCommentInPostInMemory } from "src/repositories/anyone/implementations/in-memory-database/deleteCommentInPost.memory";
import { DeleteCommentInPostService } from "./DeleteComment.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { UserIdContext } from "src/contexts/userId.context";

@Module({
    controllers: [DeleteCommentInPostController],
    providers: [
        PrismaService,
        DeleteCommentInPostImplementation,
        DeleteCommentInPostInMemory,
        DeleteCommentInPostService,
        IsJwtMiddleware,
    ],
})
export class DeleteCommentInPostModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(
                IsJwtMiddleware,
            )
                .forRoutes('delete/comment/post');
    };
};
