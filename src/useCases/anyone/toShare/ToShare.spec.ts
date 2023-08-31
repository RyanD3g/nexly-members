import { Test } from "@nestjs/testing";
import { ToShareController } from "./ToShare.controller";
import { PrismaService } from "../../../database";
import { ToShareImplementation } from "../../../repositories/anyone/implementations/ToShare.service";
import { ToShareInMemory } from "../../../repositories/anyone/implementations/in-memory-database/toShare.memory";
import { ToSharePostService } from "./ToShare.service";

describe('Aqui será testado funções de buscar post por id', ()=>{
    let controller:ToShareController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            controllers: [ToShareController],
            providers:[
                PrismaService,
                ToShareImplementation,
                ToShareInMemory,
                ToSharePostService,
            ],
        }).compile();
        controller = moduleRef.get<ToShareController>(ToShareController);
    });
    it('Deveria achar o post normalmente', async ()=>{
        const teste = await controller.shareProducer({
            postId:'123',
            userId:'34567',
        }, true);
        expect(teste[0].id).toBeDefined;
    });
    it('Deveria dar erro por não achar o post', async ()=>{
        const teste = await controller.shareProducer({
            postId:'67809',
            userId:'34567',
        }, true);
        expect(teste).toThrow;
    });
});
