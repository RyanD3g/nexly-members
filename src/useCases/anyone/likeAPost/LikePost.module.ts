import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { LikePostController } from "./LikePost.controller";
import { PrismaService } from "src/database";
import { LikeAPostImplementation } from "src/repositories/anyone/implementations/LikeAPost.service";
import { LikeAPostService } from "./LikePost.service";
import { LikePostInMemory } from "src/repositories/anyone/implementations/in-memory-database/likeAPost.memory";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";

@Module({
    controllers: [LikePostController],
    providers:[
        PrismaService,
        LikeAPostImplementation,
        LikeAPostService,
        LikePostInMemory,
        IsJwtMiddleware,
    ]
})
export class LikeAPostModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
                .forRoutes('like/post');
    };
};
