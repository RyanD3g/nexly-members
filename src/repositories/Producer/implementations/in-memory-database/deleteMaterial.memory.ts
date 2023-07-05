import { Injectable } from "@nestjs/common";
import { ADeleteMaterialLesson } from "../../IDeleteMaterial.producer";
import { IDeleteMaterialLessonDTO } from "../../../../useCases/producer/deleteMaterial/DeleteMaterialLesson.DTO";
import { Movies_Modules } from "@prisma/client";

@Injectable()
export class DeleteMaterialLessonInMemory implements ADeleteMaterialLesson {
    private lessonModel: Movies_Modules[] = [
        {
            id:'123',
            name:'Teste de nome de aula',
            duration:'8min',
            like:2,
            urlMaterial:'testedeurl.com',
            description:'Teste de descrição',
            urlMovie:'testedeurl.com',
            moduleId:'234',
            createdAt:new Date(),
            updatedAt:new Date(),
        },
    ];
    async deleteMaterial(data: IDeleteMaterialLessonDTO): Promise<Object> {
        const findForLesson = this.lessonModel.filter(e => e.id === data.lessonId);
        findForLesson[0].urlMaterial = null;
        return this.lessonModel[0];
    };
};
