import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { ToShareController } from "./ToShare.controller";
import { PrismaService } from "src/database";
import { ToShareImplementation } from "src/repositories/anyone/implementations/ToShare.service";
import { ToShareInMemory } from "src/repositories/anyone/implementations/in-memory-database/toShare.memory";
import { ToSharePostService } from "./ToShare.service";

@Module({
    controllers: [ToShareController],
    providers:[
        PrismaService,
        ToShareImplementation,
        ToShareInMemory,
        ToSharePostService,
        IsJwtMiddleware,
    ],
})
export class ToShareModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
                .forRoutes('student/post', 'producer/post');
    };
};
