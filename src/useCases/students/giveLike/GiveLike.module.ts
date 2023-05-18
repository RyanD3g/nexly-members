import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { GiveLikeController } from "./GiveLike.controller";
import { PrismaService } from "src/database";
import { GiveLikeImplementation } from "src/repositories/Student/implementations/GiveLike.service";
import { GiveLikeInMemory } from "src/repositories/Student/implementations/in-memory-database/giveLike.memory";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { GiveLikeService } from "./GiveLike.service";

@Module({
    imports: [],
    controllers: [GiveLikeController],
    providers:[
        PrismaService,
        GiveLikeImplementation,
        GiveLikeInMemory,
        GiveLikeService,
        IsJwtMiddleware,
    ],
})
export class GiveLikeModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
                .forRoutes('like/course');
    };
};
