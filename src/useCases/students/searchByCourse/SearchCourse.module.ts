import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { SearchCourseController } from "./SearchCourse.controller";
import { PrismaService } from "src/database";
import { SearchCourseImplementation } from "src/repositories/Student/implementations/FindForCourse.service";
import { SearchCourseInMemory } from "src/repositories/Student/implementations/in-memory-database/findForCourse.memory";
import { SearchCourseService } from "./SearchCourse.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";

@Module({
    imports: [],
    controllers: [SearchCourseController],
    providers:[
        PrismaService,
        SearchCourseImplementation,
        SearchCourseInMemory,
        SearchCourseService,
        IsJwtMiddleware,
    ],
})
export class SearchCourseModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
                .forRoutes('search/courses');
    };
};
