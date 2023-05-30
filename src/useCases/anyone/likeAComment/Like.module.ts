import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { LikeCommentController } from "./Like.controller";
import { PrismaService } from "src/database";
import { LikeCommentImplementation } from "src/repositories/anyone/implementations/LikeComment.service";
import { LikeCommentInMemory } from "src/repositories/anyone/implementations/in-memory-database/LikeComment.memory";
import { LikeCommentService } from "./Like.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";

@Module({
    imports: [],
    controllers: [LikeCommentController],
    providers: [
        PrismaService,
        LikeCommentImplementation,
        LikeCommentInMemory,
        LikeCommentService,
        IsJwtMiddleware,
    ],
})
export class LikeCOmmentModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
                .forRoutes('like/comment');
    };
};
