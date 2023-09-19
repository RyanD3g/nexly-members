import { Test } from "@nestjs/testing";
import { LikePostController } from "./LikePost.controller";
import { PrismaService } from "src/database";
import { LikeAPostImplementation } from "src/repositories/anyone/implementations/LikeAPost.service";
import { LikeAPostService } from "./LikePost.service";
import { LikePostInMemory } from "src/repositories/anyone/implementations/in-memory-database/likeAPost.memory";

describe('Aqui será testado as funções de dar like', ()=>{
    let controller:LikePostController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            controllers: [LikePostController],
            providers:[
                PrismaService,
                LikeAPostImplementation,
                LikeAPostService,
                LikePostInMemory,
            ]
        }).compile();
        controller = moduleRef.get<LikePostController>(LikePostController);
    });

    it('Deveria dar like normalmente', async ()=>{
        const execute = await controller.handle_toGiveLike({
            isLike:true,
            postId:'123',
            userId:'985gf6y7j',
        }, true);
        expect(execute[0].qntLikes).toEqual(1);
    });
    it('Deveria retornar um erro de post inexistente', async ()=>{
        const execute = await controller.handle_toGiveLike({
            isLike:true,
            postId:'56879',
            userId:'985gf6y7j',
        }, true);
        expect(execute).toThrow;
    });
    it('Deveria retornar um erro de usuário que deu like existente', async ()=>{
        const execute = await controller.handle_toGiveLike({
            isLike:true,
            postId:'56879',
            userId:'985gf6y7j',
        }, true);
        const execute2 = await controller.handle_toGiveLike({
            isLike:true,
            postId:'56879',
            userId:'985gf6y7j',
        }, true);
        expect(execute2).toThrow;
    });
});
