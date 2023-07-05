import { Test } from "@nestjs/testing";
import { LikeCommentController } from "./Like.controller";
import { PrismaService } from "../../../database";
import { LikeCommentImplementation } from "../../../repositories/anyone/implementations/LikeComment.service";
import { LikeCommentInMemory } from "../../../repositories/anyone/implementations/in-memory-database/LikeComment.memory";
import { LikeCommentService } from "./Like.service";

describe('Aqui deve testar as funções de like e deslike em comentátio', ()=>{
    let likeController:LikeCommentController;
    beforeAll(async()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [LikeCommentController],
            providers: [
                PrismaService,
                LikeCommentImplementation,
                LikeCommentInMemory,
                LikeCommentService,
            ],
        }).compile();
        likeController = moduleRef.get<LikeCommentController>(LikeCommentController);
    });
    describe('Deve testar as funções de like de comentário', ()=>{
        it('Deve dar like normalmente', async()=>{
            const liked = await likeController.likeInCommentOrReplyComment({
                commentId:'123',
                isLike:true,
            }, true);
            expect(liked).toEqual(2);
        });
        it('Deve dar deslike normalmente', async()=>{
            const desliked = await likeController.likeInCommentOrReplyComment({
                commentId:'123',
                isLike:false,
            }, true);
            expect(desliked).toEqual(1);
        });
        it('Deve dar like em um reply de comentário', async()=>{
            const liked = await likeController.likeInCommentOrReplyComment({
                commentId:'456',
                isLike:true,
            }, true);
            expect(liked).toEqual(1);
        });
    });
});
