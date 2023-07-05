import { Injectable } from "@nestjs/common";
import { ADeleteMaterialLesson } from "../IDeleteMaterial.producer";
import { IDeleteMaterialLessonDTO } from "../../../useCases/producer/deleteMaterial/DeleteMaterialLesson.DTO";
import { PrismaService } from "../../../database";

@Injectable()
export class DeleteMaterialLessonImplementation implements ADeleteMaterialLesson {
    constructor(
        private prisma:PrismaService,
    ){};
    async deleteMaterial(data: IDeleteMaterialLessonDTO): Promise<Object> {
        const findForLesson = await this.prisma.movies_Modules.update({
            where:{ id:data.lessonId, },
            data:{
                urlMaterial:null,
            },
        });
        await this.prisma.$disconnect();
        return findForLesson;
    };
};
