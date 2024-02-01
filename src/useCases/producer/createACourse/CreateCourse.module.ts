import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { IsProducer } from "src/middlewares/isProducer.middleware";
import { CreateCourseController } from "./CreateCourse.controller";
import { PrismaService } from "src/database";
import { CreateCourseImplementation } from "src/repositories/Producer/implementations/CreateCourse.service";
import { CreateCourseService } from "./CreateCourse.service";
import { CreateCourseInMemory } from "src/repositories/Producer/implementations/in-memory-database/createCourse.memory";
import { isSigned } from "src/middlewares/isSigned.middleware";
import { MulterModule } from "@nestjs/platform-express";
import { configsMulterCourseImages } from "src/middlewares/uploadImages.middleware";

@Module({
    imports: [
        MulterModule.registerAsync({
            useFactory: ()=> (configsMulterCourseImages),
        })
    ],
    controllers: [CreateCourseController],
    providers: [
        PrismaService,
        CreateCourseImplementation,
        CreateCourseService,
        CreateCourseInMemory,
        IsJwtMiddleware,
        IsProducer,
        isSigned,
        MulterModule,
    ],
})
export class CreateCourseModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware, IsProducer, isSigned)
                .forRoutes('course/create/producer')
    };
};
