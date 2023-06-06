import { Injectable } from "@nestjs/common";
import { AGetMyCourse } from "../../IGetMyCourse.producer";
import { Courses_Student, Student } from "@prisma/client";
import { IMyCourseDTO } from "../../../../useCases/students/getCoursesByStudent/myCourse.DTO";

@Injectable()
export class getMyCoursesInMemory implements AGetMyCourse {
    private CourseStudent__InMemory: Courses_Student[] = [{
        id:'123',
        completed:false, 
        lastSeen:'00:00:00',
        coursesId:'3232',
        studentCoursesId:'123',
        createdAt:new Date(),
        updatedAt:new Date(),
    }];
    async getCourses(data: IMyCourseDTO): Promise<Courses_Student> {
        const getCourse= await this.CourseStudent__InMemory[0];
        return getCourse;
    };
};
