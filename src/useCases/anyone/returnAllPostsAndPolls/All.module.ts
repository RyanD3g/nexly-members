import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AllPostsAndPolls } from "./All.service";
import { AllPostsAndPollsController } from "./All.controller";
import { PrismaService } from "src/database";
import { ReturnAllDataImplementation } from "src/repositories/anyone/implementations/ReturnPostsAndPolls.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";

@Module({
    controllers: [AllPostsAndPollsController],
    providers:[
        PrismaService,
        AllPostsAndPolls,
        ReturnAllDataImplementation,
        IsJwtMiddleware,
    ],
})
export class AllPostsAndPollsModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
                .forRoutes('all/posts/polls');
    };
};
