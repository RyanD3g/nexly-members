import { Injectable } from "@nestjs/common";
import { AGetMyCourse } from "../IGetMyCourse.producer";
import { Courses_Student, Student } from "@prisma/client";
import { IMyCourseDTO } from "../../../useCases/students/getCoursesByStudent/myCourse.DTO";
import { PrismaService } from "../../../database";

@Injectable()
export class getMyCoursesImplementation implements AGetMyCourse {
    constructor(
        private prisma:PrismaService,
    ){};
    async getCourses(data: IMyCourseDTO): Promise<Student> {
        const getCourse= await this.prisma.student.findUnique({
            where: { id:data.studentId, },
            include:{
                courses:true,
            },
        });
        return getCourse;
    };
};
