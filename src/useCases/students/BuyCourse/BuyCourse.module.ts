import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { BuyCourseController } from "./BuyCourse.controller";
import { PrismaService } from "src/database";
import { BuyCourseImplementation } from "src/repositories/Student/implementations/BuyCourse.service";
import { BuyCourseService } from "./BuyCourse.service";
import { BuyCourseInMemory } from "src/repositories/Student/implementations/in-memory-database/buyCourse.memory";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { IsDeleteCourseImplementation } from "src/repositories/anyone/implementations/IsDeleteCourse.service";

@Module({
    imports: [],
    controllers: [BuyCourseController],
    providers: [
        PrismaService,
        BuyCourseImplementation,
        BuyCourseService,
        BuyCourseInMemory,
        IsDeleteCourseImplementation,
        IsJwtMiddleware,
    ],
})
export class BuyCourseModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
                .forRoutes('buy/course/student')
    };
};
