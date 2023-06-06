import { Injectable } from "@nestjs/common";
import { ACourseComplete } from "../ICourseComplete.student";
import { Courses_Producer, Courses_Student } from "@prisma/client";
import { ICompleteCourseDTO } from "../../../useCases/students/courseComplete/CourseComplete.DTO";
import { PrismaService } from "../../../database";

@Injectable()
export class CompleteCourseImplementation implements ACourseComplete {
    constructor(
        private prisma:PrismaService,
    ){};
    async isExists(courseId: string): Promise<Courses_Producer> {
        const isExistsOrNo = await this.prisma.courses_Producer.findUnique({
            where:{ id:courseId, },
        });
        return isExistsOrNo;
    };
    async complete(data: ICompleteCourseDTO): Promise<Courses_Student> {
        const changeComplete = await this.prisma.courses_Student.update({
            where:{ id:data.courseStudentId, },
            data:{
                completed:true,
            },
        });
        return changeComplete;
    };
};
