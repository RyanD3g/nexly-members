import { Test } from "@nestjs/testing";
import { getMyCoursesController } from "./myCourse.controller";
import { PrismaService } from "../../../database";
import { getMyCoursesInMemory } from "../../../repositories/Student/implementations/in-memory-database/getMyCourse.memory";
import { getMyCoursesImplementation } from "../../../repositories/Student/implementations/GetMyCourse.service";
import { myCourseService } from "./myCourse.service";

describe('Deve poder pegar os cursos de cada aluno', ()=>{
    let myCourseController:getMyCoursesController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [getMyCoursesController],
            providers: [
                PrismaService,
                getMyCoursesInMemory,
                getMyCoursesImplementation,
                myCourseService,
            ],
        }).compile();
        myCourseController = moduleRef.get<getMyCoursesController>(getMyCoursesController);
    });
    describe('Deve buscar os cursos', () =>{
        it('Deve retornar os cursos', async()=>{
            const courses = await myCourseController.myCourses(true);
            expect(courses.id).toBeDefined();
        });
    });
});
