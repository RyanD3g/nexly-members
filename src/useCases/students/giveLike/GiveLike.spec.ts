import { Test } from "@nestjs/testing";
import { GiveLikeController } from "./GiveLike.controller";
import { PrismaService } from "../../../database";
import { GiveLikeImplementation } from "../../../repositories/Student/implementations/GiveLike.service";
import { GiveLikeInMemory } from "../../../repositories/Student/implementations/in-memory-database/giveLike.memory";
import { GiveLikeService } from "./GiveLike.service";

describe('Testar funcionalidades de like nos videos', ()=>{
    let giveLikeController:GiveLikeController;
    beforeAll(async()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [GiveLikeController],
            providers:[
                PrismaService,
                GiveLikeImplementation,
                GiveLikeInMemory,
                GiveLikeService,
            ],
        }).compile();

        giveLikeController = moduleRef.get<GiveLikeController>(GiveLikeController);
    });

    describe('Testando funcionalidades', ()=>{
        it('Deveria retornar um erro por não encontrar aula', async ()=>{
            const errorReturn = await giveLikeController.handle_like({ lessonId:'4334' }, true);
            expect(errorReturn).toThrow;
        });
        it('Deveria dar like em video', async ()=>{
            const successReturn = await giveLikeController.handle_like({ lessonId:'123' }, true);
            expect(successReturn).toEqual(1);
        });
    });
});
