import { Injectable } from "@nestjs/common";
import { AToWatchLesson } from "../IToWatchLesson.anyone";
import { Courses_Student } from "@prisma/client";
import { IToWatchLessonDTO } from "src/useCases/anyone/toWatchLesson/toWatchLesson.DTO";
import { PrismaService } from "src/database";
import { StreamLessonProvider } from "src/providers/implementations/StreamLesson.service";
import { Response } from "express";

@Injectable()
export class ToWatchLessonImplementation implements AToWatchLesson {
    constructor(
        private prisma:PrismaService,
        private streamProvider:StreamLessonProvider,
    ){};
    async isMyCourse(data: IToWatchLessonDTO): Promise<boolean | Courses_Student> {
        const isMyCourseStudent = await this.prisma.student.findUnique({
            where:{ id:data.studentId },
            include:{ courses:true },
        });

        if(isMyCourseStudent){
            const myCourse = isMyCourseStudent.courses.some(e => e.coursesId === data.courseId);
            return myCourse;
        };
        const isMyCourseProducer = await this.prisma.producer.findUnique({
            where:{ id:data.studentId },
            include:{ courses:true },
        });
        const myCourse = isMyCourseProducer.courses.some(e => e.id === data.courseId);
        return myCourse;
    };
    async wacthCourse(data: IToWatchLessonDTO, res:Response){
        // const { urlMovie } = await this.prisma.movies_Modules.findUnique({
        //     where:{ id:data.lessonId },
        // });
        const watch = this.streamProvider.isStream({ urlLesson:data.lessonId, quality:data.quality, speed:data.speed, }, res);
        return watch;
    };
};
