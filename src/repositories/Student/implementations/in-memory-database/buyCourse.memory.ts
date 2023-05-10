import { Injectable } from "@nestjs/common";
import { ABuyCourse } from "../../IBuyCourse.producer";
import { Courses_Student } from "@prisma/client";
import { IBuyCourse } from "../../../../useCases/students/BuyCourse/BuyCourse.DTO";

@Injectable()
export class BuyCourseInMemory implements ABuyCourse {
    private course_student__inMemory: Courses_Student[] = [];

    async buy(data: IBuyCourse): Promise<Object> {
        const buyed = await this.course_student__inMemory.push({
            id:'123',
            completed:false,
            lastSeen:'00:00:00',
            studentCoursesId:'123',
            createdAt:new Date(),
            updatedAt:new Date(),
        });
        return { buyed:true };
    };
};
