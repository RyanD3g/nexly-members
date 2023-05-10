import { Test } from "@nestjs/testing";
import { CreateCourseController } from "./CreateCourse.controller";
import { CreateCourseService } from "./CreateCourse.service";
import { PrismaService } from "../../../database";
import { CreateCourseImplementation } from "../../../repositories/Producer/implementations/CreateCourse.service";
import { CreateCourseInMemory } from "../../../repositories/Producer/implementations/in-memory-database/createCourse.memory";

describe('Should create a course', ()=>{
    let createCourseControllerTest:CreateCourseController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [CreateCourseController],
            providers: [
                PrismaService,
                CreateCourseImplementation,
                CreateCourseInMemory,
                CreateCourseService,
            ],
        }).compile();

        createCourseControllerTest = moduleRef.get<CreateCourseController>(CreateCourseController);
    });

    describe('Should to create a course', ()=>{
        it('Create course', async()=>{
            const create = await createCourseControllerTest.createCourseC(true, {
                name:'Teste de node de curso',
                urlThumbCourse:'TestedeUrl.com',
                description:'Teste de descrição',
                duration:'20h',
                certificate:true,
                categorysTag:['Teste de tag'],
                producerId:'Teste de ID de produtor'
            });
            
            expect(create).toEqual({ create:true });
        });
    });
});
