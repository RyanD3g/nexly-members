import { Test } from "@nestjs/testing";
import { CreatePollAndOptionController } from "./CreatePoll.controller";
import { PrismaService } from "src/database";
import { CreateNewPollOrAddNewOptionForPoll } from "./CreatePoll.service";
import { CreatePollAndOptionImplementation } from "src/repositories/Producer/implementations/CreateNewPoll.service";
import { CreatePollAndAddOneQuestionOptionalInMemory } from "src/repositories/Producer/implementations/in-memory-database/createPoll.memory";

describe('Aqui será testado as funções de criar uma enquete e adicionar opções', ()=>{
    let controller:CreatePollAndOptionController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            controllers: [CreatePollAndOptionController],
            providers:[
                PrismaService,
                CreateNewPollOrAddNewOptionForPoll,
                CreatePollAndOptionImplementation,
                CreatePollAndAddOneQuestionOptionalInMemory,
            ],
        }).compile();
        controller = moduleRef.get<CreatePollAndOptionController>(CreatePollAndOptionController);
    });

    it('Deveria criar uma enquete com opção normalmente', async ()=>{
        const create = await controller.addNewPoll({
            producerId:'567',
            titleQuestion:'Teste de titulo',
            descriptionQuestion:'Teste de descrição',
            options:{
                nameSelection:'Teste de nome de seleção',
            },
        }, true);

        expect(create.options).toBeDefined();
    });

    it('Deveria criar apenas uma enquete sem opção normalmente', async ()=>{
        const create = await controller.addNewPoll({
            producerId:'567',
            titleQuestion:'Teste de titulo',
            descriptionQuestion:'Teste de descrição',
        }, true);

        expect(create.options).toBeUndefined();
    });

    it('Deveria adicionar apenas uma opção normalmente', async ()=>{
        const create = await controller.addNewPoll({
            producerId:'567',
            titleQuestion:'Teste de titulo',
            descriptionQuestion:'Teste de descrição',
        }, true);
        const createOption = await controller.addNewOptionForPoll({
            pollId:'234',
            nameSelection:'Teste de titulo',
        }, true);
        expect(createOption.id).toEqual('567');
    });

    it('Deveria dar erro por não achar a enquete', async ()=>{
        const create = await controller.addNewPoll({
            producerId:'567',
            titleQuestion:'Teste de titulo',
            descriptionQuestion:'Teste de descrição',
        }, true);
        const createOption = await controller.addNewOptionForPoll({
            pollId:'478id',
            nameSelection:'Teste de titulo',
        }, true);
        expect(createOption).toThrow;
    });
});
