import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { DeleteCourseController } from "./DeleteCourse.controller";
import { PrismaService } from "src/database";
import { DeleteCourseImplementation } from "src/repositories/Producer/implementations/DeleteCourse.service";
import { DeleteCourseInMemory } from "src/repositories/Producer/implementations/in-memory-database/deleteCourse.memory";
import { DeleteCourseService } from "./DeleteCourse.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { IsProducer } from "src/middlewares/isProducer.middleware";
import { isSigned } from "src/middlewares/isSigned.middleware";

@Module({
    imports: [],
    controllers: [DeleteCourseController],
    providers: [
        PrismaService,
        DeleteCourseImplementation,
        DeleteCourseInMemory,
        DeleteCourseService,
        IsJwtMiddleware,
        IsProducer,
        isSigned,
    ],
})
export class DeleteCourseModel implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply( 
                IsJwtMiddleware,
                IsProducer,
                isSigned,
                )
                    .forRoutes('delete/course');
    };
};
