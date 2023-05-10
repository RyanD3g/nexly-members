import { Injectable } from "@nestjs/common";
import { ACreateCourse } from "../ICreateCourse.producer";
import { ICreateCourse } from "../../../useCases/producer/createACourse/CreateCourse.DTO";
import { Courses_Producer } from "@prisma/client";
import { PrismaService } from "../../../database";

@Injectable()
export class CreateCourseImplementation implements ACreateCourse {
    constructor(
        private prisma:PrismaService,
    ){};
    async createCourseAndTags({
        description,
        duration,
        categorysTag,
        name,
        producerId,
        urlThumbCourse,
        certificate,
    }: ICreateCourse): Promise<Object> {
        const createdCourse = await this.prisma.producer.update({
            where:{ id:producerId },

            data:{
                courses:{
                    create:{
                        description,
                        duration,
                        categorysTag,
                        name,
                        urlThumbCourse,
                        cretificate:certificate,
                    },
                },
            },
        });
        await this.prisma.$disconnect();
        return { create:true };
    };
};
