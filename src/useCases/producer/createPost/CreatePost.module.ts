import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { CreatePostProducerController } from "./CreatePost.controller";
import { PrismaService } from "src/database";
import { CreateAPostProducerService } from "./CreatePost.service";
import { isSigned } from "src/middlewares/isSigned.middleware";
import { IsProducer } from "src/middlewares/isProducer.middleware";
import { CreatePostProducerImplementation } from "src/repositories/Producer/implementations/CreatePost.service";
import { CreateAPosProducertInMemory } from "src/repositories/Producer/implementations/in-memory-database/createPost.memory";

@Module({
    controllers: [CreatePostProducerController],
    providers: [
        PrismaService,
        CreateAPostProducerService,
        CreatePostProducerImplementation,
        CreateAPosProducertInMemory,
        IsJwtMiddleware,
        isSigned, 
        IsProducer,
    ],
})
export class CreateAPostProducerModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware, isSigned, IsProducer)
                .forRoutes('create/post/student');
    };
};
