import { Test } from "@nestjs/testing";
import { UnfavoriteLessonController } from "./Unfavorite.controller";
import { PrismaService } from "../../../database";
import { UnfavoriteLessonImplementation } from "../../../repositories/Student/implementations/UnfavoriteLesson.service";
import { UnfavoriteLessonInMemory } from "../../../repositories/Student/implementations/in-memory-database/unfavoriteLesson.memory";
import { UnfavoriteService } from "./Unfavorite.service";

describe('Aqui será testado todas as funções de desfavoritar uma aula', ()=>{
    let unfavoriteController:UnfavoriteLessonController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [UnfavoriteLessonController],
            providers:[
                PrismaService,
                UnfavoriteLessonImplementation,
                UnfavoriteLessonInMemory,
                UnfavoriteService,
            ],
        }).compile();
        unfavoriteController = moduleRef.get<UnfavoriteLessonController>(UnfavoriteLessonController);
    });

    it('Deveria desfavoritar normalmente', async()=>{
        const desfavoritando = await unfavoriteController.handle_unfavorite({
            favoriteId:'123',
        }, true);
        expect(desfavoritando).toHaveLength(1);
    });
    it('Deveria dar erro ao desfavoritar por não achar', async()=>{
        const desfavoritando = await unfavoriteController.handle_unfavorite({
            favoriteId:'56678',
        }, true);
        expect(desfavoritando).toThrow;
    });
});
