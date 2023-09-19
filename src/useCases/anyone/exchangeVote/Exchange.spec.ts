import { PrismaService } from "src/database";
import { ExchangeVoteController } from "./Exchange.controller";
import { ExchangeVoteImplementation } from "src/repositories/anyone/implementations/ExchangeVote.service";
import { ExchangeVoteInMemory } from "src/repositories/anyone/implementations/in-memory-database/exchangeVote.memory";
import { ExchangeVoteService } from "./Exchange.service";
import { Test } from "@nestjs/testing";

describe('Aqui será testado as funções de trocar de voto', ()=>{
    let controller:ExchangeVoteController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            controllers: [ExchangeVoteController],
            providers: [
                PrismaService,
                ExchangeVoteImplementation,
                ExchangeVoteInMemory,
                ExchangeVoteService,
            ],
        }).compile();
        controller = moduleRef.get<ExchangeVoteController>(ExchangeVoteController);
    });

    it('Deveria trocar voto normalmente', async()=>{
        const execute = await controller.handle_exchange({
            newOptionId:'456',
            oldOptionId:'123',
        }, true);
        expect(execute.newOption.qntVotes).toEqual(568);
    });
    it('Deveria retornar erro por não encontrar opção', async()=>{
        const execute = await controller.handle_exchange({
            newOptionId:'6709',
            oldOptionId:'123',
        }, true);
        expect(execute).toThrow;
    });
    it('Deveria retornar erro por não encontrar opção', async()=>{
        const execute = await controller.handle_exchange({
            newOptionId:'456',
            oldOptionId:'980',
        }, true);
        expect(execute).toThrow;
    });
});
