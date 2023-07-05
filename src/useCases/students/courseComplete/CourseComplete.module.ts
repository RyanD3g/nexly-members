import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { CourseCompleteController } from "./CourseComplete.controller";
import { PrismaService } from "src/database";
import { CourseCompleteService } from "./CourseComplete.service";
import { CourseCompleteInMemory } from "src/repositories/Student/implementations/in-memory-database/courseComplete.memory";
import { CompleteCourseImplementation } from "src/repositories/Student/implementations/CompleteCourse.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";

@Module({
    imports: [],
    controllers: [CourseCompleteController],
    providers:[
        PrismaService,
        CourseCompleteService,
        CourseCompleteInMemory,
        CompleteCourseImplementation,
        IsJwtMiddleware,
    ],
})
export class CompleteCourseModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
                .forRoutes('complete/course');
    };
};
