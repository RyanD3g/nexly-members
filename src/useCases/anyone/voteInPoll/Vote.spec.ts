import { Test } from "@nestjs/testing";
import { VoteInPollController } from "./Vote.controller";
import { PrismaService } from "src/database";
import { VoteInPollImplementation } from "src/repositories/anyone/implementations/VoteInPoll.service";
import { VoteInPollInMemory } from "src/repositories/anyone/implementations/in-memory-database/voteInPoll.memory";
import { VoteInPollService } from "./Vote.service";

describe('Aqui será testado todas as funcões de votar em uma enquete', ()=>{
    let controller:VoteInPollController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            controllers: [VoteInPollController],
            providers: [
                PrismaService,
                VoteInPollImplementation,
                VoteInPollInMemory,
                VoteInPollService,
            ],
        }).compile();
        controller = moduleRef.get<VoteInPollController>(VoteInPollController);
    });

    it('Deveria votar normalmente', async()=>{
        const execute = await controller.handle_Vote({
            idUser:'4567',
            optionId:'123',
            pollId:'689',
        }, true);
        expect(execute.id).toBeDefined();
    });
    it('Deveria retornar um erro por não encontrar a opção', async()=>{
        const execute = await controller.handle_Vote({
            idUser:'4567',
            optionId:'678',
            pollId:'689',
        }, true);
        expect(execute).toThrow;
    });
    it('Deveria retornar um erro de usuário ja votado anteriormente', async()=>{
        const execute = await controller.handle_Vote({
            idUser:'4567',
            optionId:'123',
            pollId:'689',
        }, true);
        const execute2 = await controller.handle_Vote({
            idUser:'4567',
            optionId:'123',
            pollId:'689',
        }, true);
        expect(execute2).toThrow;
    });
});
