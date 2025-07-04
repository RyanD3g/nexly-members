import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { CreatePostController } from "./CreatePost.controller";
import { PrismaService } from "src/database";
import { CreateAPostInMemory } from "src/repositories/Student/implementations/in-memory-database/createAPost.memory";
import { CreatePostImplementation } from "src/repositories/Student/implementations/CreatePost.service";
import { CreateAPostService } from "./CreatePost.service";
import { MulterModule } from "@nestjs/platform-express";
import { configsMulterStudentImages } from "src/middlewares/uploadImages.middleware";

@Module({
    imports: [
        MulterModule.registerAsync({
            useFactory: ()=> (configsMulterStudentImages),
        }),
    ],
    controllers: [CreatePostController],
    providers: [
        PrismaService,
        CreateAPostInMemory,
        CreatePostImplementation,
        CreateAPostService,
        IsJwtMiddleware,
    ],
})
export class CreateAPostModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
                .forRoutes('create/post/student');
    };
};
