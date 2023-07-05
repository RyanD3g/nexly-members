import { Test } from "@nestjs/testing";
import { DeleteCourseController } from "./DeleteCourse.controller";
import { PrismaService } from "../../../database";
import { DeleteCourseImplementation } from "../../../repositories/Producer/implementations/DeleteCourse.service";
import { DeleteCourseInMemory } from "../../../repositories/Producer/implementations/in-memory-database/deleteCourse.memory";
import { DeleteCourseService } from "./DeleteCourse.service";

describe('Aqui será testado as funções de deleção de curso por parte do produtor', ()=>{
    let deleteController:DeleteCourseController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [DeleteCourseController],
            providers: [
                PrismaService,
                DeleteCourseImplementation,
                DeleteCourseInMemory,
                DeleteCourseService,
            ],
        }).compile();
        deleteController = moduleRef.get<DeleteCourseController>(DeleteCourseController);
    });
    describe('Testando funções', ()=>{
        it('Deveria agendar a deleção normalmente', async ()=>{
            const deleteTest = await deleteController.deleteCourse({
                courseId:'123',
                producerId:'234',
            }, true);
            expect(deleteTest.delDate).toBeDefined();
        });
        it('Deveria impedir a deleção pelo curso não ser dele', async ()=>{
            const deleteTest = await deleteController.deleteCourse({
                courseId:'123',
                producerId:'789',
            }, true);
            expect(deleteTest).toThrow;
        });
        it('Deveria impedir a deleção porque a deleção já está agendada', async ()=>{
            const deleteTest = await deleteController.deleteCourse({
                courseId:'123',
                producerId:'234',
            }, true);
            const deleteTest2 = await deleteController.deleteCourse({
                courseId:'123',
                producerId:'234',
            }, true);
            expect(deleteTest2).toThrow;
        });
    });
});
