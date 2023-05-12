import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { getMyCoursesController } from "./myCourse.controller";
import { PrismaClient } from "@prisma/client";
import { PrismaService } from "src/database";
import { getMyCoursesInMemory } from "src/repositories/Student/implementations/in-memory-database/getMyCourse.memory";
import { getMyCoursesImplementation } from "src/repositories/Student/implementations/GetMyCourse.service";
import { myCourseService } from "./myCourse.service";

@Module({
    imports: [],
    controllers: [getMyCoursesController],
    providers: [
        PrismaService,
        getMyCoursesInMemory,
        getMyCoursesImplementation,
        myCourseService,
    ],
})
export class MyCourseModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
                .forRoutes('courses/list-my-courses/student')
    };
};
