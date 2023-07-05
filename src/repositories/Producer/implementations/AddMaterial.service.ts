import { Injectable } from "@nestjs/common";
import { AAddMaterialInLesson } from "../IAddMaterialInLesson.producer";
import { Movies_Modules } from "@prisma/client";
import { PrismaService } from "src/database";
import { IAddMaterialInLessonDTO } from "src/useCases/producer/addMaterialInLesson/AddMaterial.DTO";

@Injectable()
export class AddMaterialImplementation implements AAddMaterialInLesson {
    constructor(
        private prisma:PrismaService,
    ){};
    async isExistsLesson(lessonId: string): Promise<Movies_Modules> {
        const findForCourse = await this.prisma.movies_Modules.findUnique({
            where:{ id:lessonId, },
        });
        return findForCourse;
    };
    async addMaterial(data: IAddMaterialInLessonDTO): Promise<Movies_Modules> {
        const addMaterialInLesson = await this.prisma.movies_Modules.update({
            where:{ id:data.lessonId, },
            data:{
                urlMaterial:data.urlMaterial,
            },
        });

        return addMaterialInLesson;
    };
};