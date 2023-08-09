import { Test } from "@nestjs/testing";
import { CommentInPostController } from "./Comment.controller";
import { PrismaService } from "src/database";
import { CommentInPostImplentation } from "src/repositories/anyone/implementations/CommentInPost.service";
import { CommentInPostInMemory } from "src/repositories/anyone/implementations/in-memory-database/commentInPost.memory";
import { CommentInPostService } from "./Comment.service";

describe('Aqui será testado todas as funções de comentar em um post', ()=>{
    let controller:CommentInPostController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            controllers: [CommentInPostController],
            providers:[
                PrismaService,
                CommentInPostImplentation,
                CommentInPostInMemory,
                CommentInPostService,
            ],
        }).compile();
        controller = moduleRef.get<CommentInPostController>(CommentInPostController);
    });

    it('Deveria postar um comentário normalmente', async()=>{
        const comment = await controller.handle_comment({
            postId:'123',
            nameUserComment:'Teste de nome',
            contentComment:'Teste de conteúdo',
            idUserComment:'4578',
        }, true);
        expect(comment.id).toBeDefined();
    });

    it('Deveria dar erro por post inexistente', async()=>{
        const comment = await controller.handle_comment({
            postId:'7-9765',
            nameUserComment:'Teste de nome',
            contentComment:'Teste de conteúdo',
            idUserComment:'4578',
        }, true);

        expect(comment).toThrow;
    });
});
