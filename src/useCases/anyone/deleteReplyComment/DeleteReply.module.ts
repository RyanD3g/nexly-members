import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AlsModule } from "src/als.module";
import { UserIdContext } from "src/contexts/userId.context";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { DeleteReplyCommentController } from "./DeleteReply.controller";
import { PrismaService } from "src/database";
import { DeleteReplyCommentImplementation } from "src/repositories/anyone/implementations/DeleteReplyComment.service";
import { DeleteReplyCommentInMemory } from "src/repositories/anyone/implementations/in-memory-database/deleteReplyComment.memory";

@Module({
    imports: [AlsModule],
    controllers: [DeleteReplyCommentController],
    providers: [
        PrismaService,
        DeleteReplyCommentImplementation,
        DeleteReplyCommentInMemory,
        IsJwtMiddleware,
    ]
})
export class DeleteReplyCommentModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(
                IsJwtMiddleware,
                UserIdContext,
            )
                .forRoutes('delete/replyComment');
    };
};
