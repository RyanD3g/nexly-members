import { Module } from "@nestjs/common";
import { GetAllCoursesController } from "./getAllCourse.controller";
import { PrismaService } from "src/database";
import { GetAllCoursesImplementation } from "src/repositories/Producer/implementations/GetAllCourse.service";
import { getAllCoursesService } from "./getAllCourse.service";
import { IsDeleteCourseImplementation } from "src/repositories/anyone/implementations/IsDeleteCourse.service";

@Module({
    imports: [],
    controllers: [GetAllCoursesController],
    providers: [
        PrismaService,
        GetAllCoursesImplementation,
        getAllCoursesService,
        IsDeleteCourseImplementation,
    ],
})
export class GetAllCoursesModule {};
