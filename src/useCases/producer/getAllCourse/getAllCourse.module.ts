import { Module } from "@nestjs/common";
import { GetAllCoursesController } from "./getAllCourse.controller";
import { PrismaService } from "src/database";
import { GetAllCoursesImplementation } from "src/repositories/Producer/implementations/GetAllCourse.service";
import { getAllCoursesService } from "./getAllCourse.service";

@Module({
    imports: [],
    controllers: [GetAllCoursesController],
    providers: [
        PrismaService,
        GetAllCoursesImplementation,
        getAllCoursesService,
    ],
})
export class GetAllCoursesModule {};
