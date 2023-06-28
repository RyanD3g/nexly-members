import { Test } from "@nestjs/testing";
import { CancelDeleteCourseController } from "./CancelDelete.controller";
import { PrismaService } from "../../../database";
import { CancelDeleteCourseImplementation } from "../../../repositories/Producer/implementations/CancelDeleteCourse.service";
import { CancelDeleteCourseInMemory } from "../../../repositories/Producer/implementations/in-memory-database/cancelDeleteCourse.memory";
import { CancelDeleteCourseService } from "./CancelDelete.service";

describe('Aqui será testado as funções de cancelar deleção de curso', ()=>{
    let cancelDelCourseController:CancelDeleteCourseController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [CancelDeleteCourseController],
            providers: [
                PrismaService,
                CancelDeleteCourseImplementation,
                CancelDeleteCourseInMemory,
                CancelDeleteCourseService,
            ],
        }).compile();
        cancelDelCourseController = moduleRef.get<CancelDeleteCourseController>(CancelDeleteCourseController);
    });
    describe('Testando funções de cancelamento de deleção', ()=>{
        it('Deveria cancelar uma deleção normalmente', async()=>{
            const cancel = await cancelDelCourseController.cancel({
                courseId:'123',
                producerId:'5454',
            }, true);
            expect(cancel.delDate).toEqual(null);
        });
        it('Deveria retornar um erro porque o curso não foi encontrado', async()=>{
            const cancel = await cancelDelCourseController.cancel({
                courseId:'3455',
                producerId:'5454',
            }, true);
            expect(cancel).toThrow;
        });
    });
});
