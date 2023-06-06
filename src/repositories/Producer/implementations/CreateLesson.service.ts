import { Injectable } from "@nestjs/common";
import { ACreateLesson } from "../ICreateLesson.producer";
import { ICreateLesson } from "src/useCases/producer/createLesson/CreateLesson.DTO";
import { PrismaService } from "src/database";

@Injectable()
export class CreateLessonImplementation implements ACreateLesson {
    constructor(
        private prisma:PrismaService,
    ){};
    async createLesson({
        name,
        description,
        duration,
        urlMaterial,
        urlMovie,
        moduleId,
    }: ICreateLesson): Promise<Object> {
        const created_lesson = await this.prisma.modules_Courses.update({
            where:{ id:moduleId, },
            include:{ movies:true },

            data:{
                movies:{
                    create:{
                        name,
                        description,
                        duration,
                        urlMaterial,
                        urlMovie,
                    },
                },
            },
        });
        return created_lesson;
    };
};
