import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { CancelDeleteCourseController } from "./CancelDelete.controller";
import { PrismaService } from "src/database";
import { CancelDeleteCourseImplementation } from "src/repositories/Producer/implementations/CancelDeleteCourse.service";
import { CancelDeleteCourseInMemory } from "src/repositories/Producer/implementations/in-memory-database/cancelDeleteCourse.memory";
import { CancelDeleteCourseService } from "./CancelDelete.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { IsProducer } from "src/middlewares/isProducer.middleware";
import { isSigned } from "src/middlewares/isSigned.middleware";

@Module({
    imports: [],
    controllers: [CancelDeleteCourseController],
    providers: [
        PrismaService,
        CancelDeleteCourseImplementation,
        CancelDeleteCourseInMemory,
        CancelDeleteCourseService,
        IsJwtMiddleware,
        IsProducer,
        isSigned,
    ],
})
export class CancelDeleteCourseModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(
                IsJwtMiddleware,
                IsProducer,
                isSigned,
            )
                .forRoutes('cancel/delete/course')
    };
};
