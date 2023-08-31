import { Injectable } from "@nestjs/common";
import { ADeleteComment } from "../../IDeleteCommentInPost.anyone";
import { IDeleteCommentInPostDTO } from "src/useCases/anyone/deleteOneCommentInPost/DeleteComment.DTO";
import { Comments_Post } from "@prisma/client";

@Injectable()
export class DeleteCommentInPostInMemory implements ADeleteComment {
    private CommentsPostModel: Comments_Post[] = [
        {
            id:'123',
            commentPostId:'amocsacm',
            contentComment:'Teste de conteúdo',
            nameUserComment:'Teste de nome de usuário',
            userId:'6789',
            userUrlPhoto:'testedeurl.com',
            createdAt:new Date(),
            updatedAt:new Date(),
        },
    ];
    commentExists(commentId: string) {
        const findForComment = this.CommentsPostModel.some(e => e.id === commentId);
        return findForComment;
    };
    deleteComment(data: IDeleteCommentInPostDTO) {
        const isMyComment = this.CommentsPostModel.some(e => e.userId === data.userId);
        if(!isMyComment){
            throw new Error('Comentário não pertence a você.');
        };
        const findForData = this.CommentsPostModel.filter(e => e.id === data.commentId);
        const modelForDelete = this.CommentsPostModel.indexOf(findForData[0]);
        delete this.CommentsPostModel[modelForDelete];
        console.log(this.CommentsPostModel);
        return this.CommentsPostModel;
    };
};
