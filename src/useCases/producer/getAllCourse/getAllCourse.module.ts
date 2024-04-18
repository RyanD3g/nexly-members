import { Module } from "@nestjs/common";
import { GetAllCoursesController } from "./getAllCourse.controller";
import { PrismaService } from "src/database";
import { GetAllCoursesImplementation } from "src/repositories/Producer/implementations/GetAllCourse.service";
import { getAllCoursesService } from "./getAllCourse.service";
import { IsDeleteCourseImplementation } from "src/repositories/anyone/implementations/IsDeleteCourse.service";
import { TesteController } from "src/useCases/anyone/test.controller";
import { TooBusyGuard } from "src/@shared/guards/toobusy.guard";
import { APP_GUARD } from "@nestjs/core";

@Module({
    imports: [],
    controllers: [GetAllCoursesController, TesteController],
    providers: [
        PrismaService,
        GetAllCoursesImplementation,
        getAllCoursesService,
        IsDeleteCourseImplementation,
        {
            provide: APP_GUARD,
            useClass: TooBusyGuard,
        }
    ],
})
export class GetAllCoursesModule {};
