import { Injectable } from "@nestjs/common";
import { ACreateCourse } from "../../ICreateCourse.producer";
import { ICreateCourse } from "../../../../useCases/producer/createACourse/CreateCourse.DTO"; 
import { Courses_Producer } from "@prisma/client";
import { PrismaService } from "../../../../database";

@Injectable()
export class CreateCourseInMemory implements ACreateCourse {
    private CreateCourseModel__InMemory: Courses_Producer[] = [];
    async createCourseAndTags({
        description,
        duration,
        categorysTag,
        name,
        producerId,
        urlThumbCourse,
        certificate,
    }: ICreateCourse): Promise<Object> {
        const createdCourse_inMemory = await this.CreateCourseModel__InMemory.push({
            categorysTag,
            cretificate:certificate,
            description,
            duration,
            id:'123',
            createdAt:new Date(),
            updatedAt:new Date(),
            name,
            producerId,
            urlThumbCourse,
        });
        return { create:true };
    };
};
