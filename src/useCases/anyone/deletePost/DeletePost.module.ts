import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { DeletePostController } from "./DeletePost.controller";
import { PrismaService } from "src/database";
import { DeletePostImplementation } from "src/repositories/anyone/implementations/DeletePost.service";
import { DeletePostInMemory } from "src/repositories/anyone/implementations/in-memory-database/deletePost.memory";
import { DeletePostService } from "./DeletePost.service";

@Module({
    controllers: [DeletePostController],
    providers:[
        PrismaService,
        DeletePostImplementation,
        DeletePostInMemory,
        DeletePostService,
        IsJwtMiddleware,
    ],
})

export class DeletePostModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
                .forRoutes('delete/post');
    };
};
