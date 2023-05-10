import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { CreateLessonController } from "./CreateLesson.controller";
import { PrismaService } from "src/database";
import { CreateLessonImplementation } from "src/repositories/Producer/implementations/CreateLesson.service";
import { CreateLessonService } from "./CreateLesson.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { IsProducer } from "src/middlewares/isProducer.middleware";
import { isSigned } from "src/middlewares/isSigned.middleware";
import configsMulterForMovies from '../../../middlewares/uploadMovies.middleware';
import { MulterModule } from "@nestjs/platform-express";

@Module({
    imports: [
        MulterModule.registerAsync({
            useFactory: ()=> (configsMulterForMovies)
        }),
    ],
    controllers: [CreateLessonController],
    providers: [
        PrismaService,
        CreateLessonImplementation,
        CreateLessonService,
        IsJwtMiddleware, 
        IsProducer, 
        isSigned,
    ],
})
export class CreateLessonModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware, IsProducer, isSigned)
    };
};
