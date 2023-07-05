import { Test } from "@nestjs/testing";
import { DeleteMaterialController } from "./DeleteMaterialLesson.controller";
import { PrismaService } from "../../../database";
import { DeleteMaterialLessonImplementation } from "../../../repositories/Producer/implementations/DeleteMaterial.service";
import { DeleteMaterialLessonInMemory } from "../../../repositories/Producer/implementations/in-memory-database/deleteMaterial.memory";
import { DeleteMaterialService } from "./DeleteMaterialLesson.service";

describe('Aqui testaremos as funções de deleção de material de aula', ()=>{
    let deleteMaterialController:DeleteMaterialController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [DeleteMaterialController],
            providers:[
                PrismaService,
                DeleteMaterialLessonImplementation,
                DeleteMaterialLessonInMemory,
                DeleteMaterialService,
            ],
        }).compile();
        deleteMaterialController = moduleRef.get<DeleteMaterialController>(DeleteMaterialController);
    });
    describe('Testando funções', ()=>{
        it('Deveria deletear normalmente uma url de material', async ()=>{
            const deleted = await deleteMaterialController.delete({
                lessonId:'123',
            }, true);
            expect(deleted.urlMaterial).toBeNull;
        });
    });
});