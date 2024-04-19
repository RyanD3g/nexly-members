import { Test } from "@nestjs/testing";
import { DeleteCommentInPostController } from "./DeleteComment.controller";
import { PrismaService } from "src/database";
import { DeleteCommentInPostImplementation } from "src/repositories/anyone/implementations/DeleteCommentInPost.service";
import { DeleteCommentInPostInMemory } from "src/repositories/anyone/implementations/in-memory-database/deleteCommentInPost.memory";
import { DeleteCommentInPostService } from "./DeleteComment.service";

describe('Aqui será testado funções de deleção de comentário de um post', ()=>{
    let controller:DeleteCommentInPostController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            controllers: [DeleteCommentInPostController],
            providers: [
                PrismaService,
                DeleteCommentInPostImplementation,
                DeleteCommentInPostInMemory,
                DeleteCommentInPostService,
            ],
        }).compile();
        controller = moduleRef.get<DeleteCommentInPostController>(DeleteCommentInPostController);
    });
    it('Deveria deletar em comentário normalmente', async ()=>{
        const execute = await controller.handle_delete({
            commentId:'123',
            userId: '6789',
        }, true);
        expect(execute).toHaveLength(1);
    });
    it('Deveria dar erro por não achar comentário', async ()=>{
        const execute = await controller.handle_delete({
            commentId:'799876',
            userId: '6789',
        }, true);
        expect(execute).toThrow;
    });
    it('Deveria dar erro por não autorizado', async ()=>{
        const execute = await controller.handle_delete({
            commentId:'123',
            userId: '67hb',
        }, true);
        expect(execute).toThrow;
    });
});
