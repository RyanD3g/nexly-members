import { Test } from "@nestjs/testing";
import { CourseCompleteController } from "./CourseComplete.controller";
import { CompleteCourseImplementation } from "../../../repositories/Student/implementations/CompleteCourse.service";
import { CourseCompleteInMemory } from "../../../repositories/Student/implementations/in-memory-database/courseComplete.memory";
import { CourseCompleteService } from "./CourseComplete.service";
import { PrismaService } from "../../../database";

describe('Aqui será testado as funções de finalizar um curso', ()=>{
    let completeCourseController:CourseCompleteController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [CourseCompleteController],
            providers:[
                PrismaService,
                CourseCompleteService,
                CourseCompleteInMemory,
                CompleteCourseImplementation,
            ],
        }).compile();
        completeCourseController = moduleRef.get<CourseCompleteController>(CourseCompleteController);
    });

    describe('Testando funções de finalização de aula', ()=>{
        it('deveria finalizar um curso', async()=>{
            const completeCourse = await completeCourseController.completeCourse(
                { courseId:'456', courseStudentId:'4346', studentId:'2345' }, true);
            expect(completeCourse.completed).toEqual(true);
        });
        it('Deveria dar erro por não existir o curso, ou por não ser meu', async ()=>{
            const completeCourse = await completeCourseController.completeCourse(
                { courseId:'987', courseStudentId:'4346', studentId:'2345' }, true);
            expect(completeCourse).toThrow;
        });
    });
});
