import { Injectable } from "@nestjs/common";
import { ACancelDeleteCourse } from "../ICancelDeleteCourse.producer";
import { ICancelDeleteCourseDTO } from "../../../useCases/producer/cancelDeleteCourse/CancelDelete.DTO";
import { Courses_Producer } from "@prisma/client";
import { PrismaService } from "../../../database";

@Injectable()
export class CancelDeleteCourseImplementation implements ACancelDeleteCourse {
    constructor(
        private prisma:PrismaService,
    ){};
    async isExists(courseId: string): Promise<Courses_Producer> {
        const courseExists = await this.prisma.courses_Producer.findUnique({
            where:{ id:courseId, },
        });
        return courseExists;
    };
    async cancelDelete(data: ICancelDeleteCourseDTO): Promise<Object> {
        const cancelDeleteCourse = this.prisma.courses_Producer.update({
            where:{ id:data.courseId, },
            data:{
                delDate:null,
            },
        });
        return cancelDeleteCourse;
    };
};
