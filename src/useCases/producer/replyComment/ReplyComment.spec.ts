import { Test } from "@nestjs/testing";
import { ReplyCommentController } from "./ReplyComment.controller";
import { ReplyCommentService } from "./ReplyComment.service";
import { ReplyCommentInMemory } from "../../../repositories/Producer/implementations/in-memory-database/replyComment.memory";
import { ReplyCommentImplementation } from "../../../repositories/Producer/implementations/ReplyComment.service";
import { PrismaService } from "../../../database";
import { IsDeleteCourseImplementation } from "../../../repositories/anyone/implementations/IsDeleteCourse.service";

describe('Aqui será testado a funcionalidade de responder um comentário', ()=>{
    let replyController:ReplyCommentController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers:[ReplyCommentController],
            providers: [
                PrismaService,
                ReplyCommentImplementation,
                ReplyCommentInMemory,
                ReplyCommentService,
                IsDeleteCourseImplementation,
            ],
        }).compile();
        replyController = moduleRef.get<ReplyCommentController>(ReplyCommentController);
    });

    describe('Deve testar funcionalidades de comentário', ()=>{
        it('Deve criar uma resposta a um comentário', async ()=>{
            const reply = await replyController.commentReply({
                nameUser:'Ryan Dias',
                comment:'Teste de comentário',
                commentId:'2323',
                producertId:'356',
            }, true);

            expect(reply.comment).toBeDefined();
        });
    });
});
