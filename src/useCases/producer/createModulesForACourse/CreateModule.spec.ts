import { Test } from "@nestjs/testing";
import { PrismaService } from "../../../database";
import { CreateModuleImplementation } from "../../../repositories/Producer/implementations/CreateModule.service";
import { CreateModuleInMemory } from "../../../repositories/Producer/implementations/in-memory-database/createModule.memory";
import { CreateModuleService } from "./CreateModule.service";
import { CreateModuleController } from "./CreateModule.controller";

describe('Should create a module', ()=>{
    let createModuleControllerTest:CreateModuleController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [CreateModuleController],
            providers: [
                PrismaService,
                CreateModuleImplementation,
                CreateModuleInMemory,
                CreateModuleService,
            ],
        }).compile();

        createModuleControllerTest = moduleRef.get<CreateModuleController>(CreateModuleController);
    });

    describe('Should to create a module', ()=>{
        it('Create module for a course', async()=>{
            const create = await createModuleControllerTest.createModuleBasedInACourse(true, {
                name:'Teste de nome de modulo',
                description:'Teste de descrição',
                duration:'Teste de duração',
                courseId:'123',
            });

            expect(create).toEqual({ createdModule:true });
        });
    });
});
