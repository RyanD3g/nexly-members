import { Injectable } from "@nestjs/common";
import { AGetAllCourse } from "../IGetAllCourse.producer";
import { PrismaService } from "src/database";
import { Courses_Producer } from "@prisma/client";

@Injectable()
export class GetAllCoursesImplementation implements AGetAllCourse {
    constructor(
        private prisma:PrismaService,
    ){};
    async getAll(): Promise<Courses_Producer[]> {
        const allCourses = await this.prisma.courses_Producer.findMany({
            include:{
                modules:{
                    include:{
                        movies:true,
                    },
                },
            },
        });
        await this.prisma.$disconnect();
        return allCourses;
    };
};
