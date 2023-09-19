import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { CommentInPostController } from "./Comment.controller";
import { PrismaService } from "src/database";
import { CommentInPostImplentation } from "src/repositories/anyone/implementations/CommentInPost.service";
import { CommentInPostInMemory } from "src/repositories/anyone/implementations/in-memory-database/commentInPost.memory";
import { CommentInPostService } from "./Comment.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";

@Module({
    controllers: [CommentInPostController],
    providers:[
        PrismaService,
        CommentInPostImplentation,
        CommentInPostInMemory,
        CommentInPostService,
        IsJwtMiddleware,
    ],
})
export class CommentInPostModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
                .forRoutes('comment/post');
    };
};

