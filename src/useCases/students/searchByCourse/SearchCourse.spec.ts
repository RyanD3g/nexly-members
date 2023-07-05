import { PrismaService } from "../../../database";
import { SearchCourseController } from "./SearchCourse.controller";
import { SearchCourseImplementation } from "../../../repositories/Student/implementations/FindForCourse.service";
import { SearchCourseInMemory } from "../../../repositories/Student/implementations/in-memory-database/findForCourse.memory";
import { SearchCourseService } from "./SearchCourse.service";
import { Test } from "@nestjs/testing";

describe('Testes de pesquisa de cursos', ()=>{
    let searchCourseController:SearchCourseController;
    beforeAll(async()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [SearchCourseController],
            providers:[
                PrismaService,
                SearchCourseImplementation,
                SearchCourseInMemory,
                SearchCourseService,
            ],
        }).compile();

        searchCourseController = moduleRef.get<SearchCourseController>(SearchCourseController);
    });
    it('Deve pesquisar com filtro', async ()=>{
        const search = await searchCourseController.handle_find({
            filterForCourseName:'Teste de nome',
            filterForProducer:'1234',
            filterForTag:'teste de tag',
        }, true);
        expect(search).toHaveLength(1);
    });
    it('Deve Retornar um aviso de não encontrado', async()=>{
        const search = await searchCourseController.handle_find({
            filterForCourseName:'Teste de nome',
            filterForProducer:'1234',
            filterForTag:'teste de tag',
        }, true);
        expect(search).toThrow;
    });
});
