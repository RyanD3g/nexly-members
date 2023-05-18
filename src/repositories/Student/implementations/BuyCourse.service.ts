import { Injectable } from "@nestjs/common";
import { ABuyCourse } from "../IBuyCourse.producer";
import { IBuyCourse } from "../../../useCases/students/BuyCourse/BuyCourse.DTO";
import { PrismaService } from "../../../database";

@Injectable()
export class BuyCourseImplementation implements ABuyCourse {
    constructor(
        private prisma:PrismaService,
    ){};
    async buy(data: IBuyCourse): Promise<Object> {
        const myCourseBuyed = await this.prisma.courses_Producer.findUnique({
            where:{ id:data.courseId, },
        });
        const buyed = await this.prisma.student.update({
            where:{ id:data.studentId, },
            data:{
                courses:{
                    create:{
                        coursesId:data.courseId,
                    },
                },
            },
        });
        return { buyed:true };
    };
};
