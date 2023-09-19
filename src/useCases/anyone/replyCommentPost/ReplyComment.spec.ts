import { Test } from "@nestjs/testing";
import { ReplyCommentPostController } from "./ReplyComment.controller";
import { PrismaService } from "src/database";
import { ReplyCommentPostImplementation } from "src/repositories/anyone/implementations/ReplyCommentPost.service";
import { ReplyCommentPostInMemory } from "src/repositories/anyone/implementations/in-memory-database/replyCommentPost.memory";
import { ReplyCommentPostService } from "./ReplyComment.service";

describe('Aqui será testado as funções de responder um comentário', ()=>{
    let controller:ReplyCommentPostController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            controllers: [ReplyCommentPostController],
            providers: [
                PrismaService,
                ReplyCommentPostImplementation,
                ReplyCommentPostInMemory,
                ReplyCommentPostService,
            ],
        }).compile();
        controller = moduleRef.get<ReplyCommentPostController>(ReplyCommentPostController);
    });

    it('Deveria dar erro por não achar o comentário', async ()=>{
        const test = await controller.handle_comment({
            commentId:'fl,mknjb',
            contentReplyComment:'Teste de comentário',
            userId:'123',
            userUrlPhoto:'teste.com',
            nameUserReplyComment:'Teste de nome',
        }, true);
        expect(test).toThrow;
    });
    it('Deveria responder normalmente', async ()=>{
        const test = await controller.handle_comment({
            commentId:'123',
            contentReplyComment:'Teste de comentário',
            userId:'456',
            userUrlPhoto:'teste.com',
            nameUserReplyComment:'Teste de nome',
        }, true);
        expect(test).toHaveLength(1);
    });
});
