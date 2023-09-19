import { Injectable } from "@nestjs/common";
import { AReplyCommentPost } from "../../IReplyComment.anyone";
import { Comments_Post, ReplyComment_Posts } from "@prisma/client";
import { IReplyCommentPostDTO } from "src/useCases/anyone/replyCommentPost/ReplyComment.DTO";

@Injectable()
export class ReplyCommentPostInMemory implements AReplyCommentPost {
    private replyCommentModel: ReplyComment_Posts[] = [];
    private commentModel: Comments_Post[] =[
        {
            id:'123',
            userUrlPhoto:'teste.com.br',
            userId:'Teste',
            contentComment:'Teste',
            nameUserComment:'Teste',
            commentPostId:'Teste',
            createdAt:new Date(),
            updatedAt:new Date(),
        },
    ];
    commentExists(commentId: string): boolean {
        const isExists = this.commentModel.some(e => e.id === commentId);
        return isExists;
    };
    replyComment({ contentReplyComment, nameUserReplyComment, userId, userUrlPhoto }: IReplyCommentPostDTO): ReplyComment_Posts[] {
        const sendReply = this.replyCommentModel.push({
            id:'368',
            contentReplyComment,
            nameUserReplyComment,
            replyId:'45678',
            userId,
            userUrlPhoto,
            createdAt:new Date(),
            updatedAt:new Date(),
        });
        return this.replyCommentModel;
    };
};
