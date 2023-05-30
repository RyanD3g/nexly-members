import { Injectable } from "@nestjs/common";
import { ALikeComment } from "../../ILikeComment.anyone";
import { Comments_movies, Reply_Comment } from "@prisma/client";
import { ILikeCommentDTO } from "../../../../useCases/anyone/likeAComment/Like.DTO";

@Injectable()
export class LikeCommentInMemory implements ALikeComment {
    private commentsModel__InMemory: Comments_movies[] = [{
        id:'123',
        nameStudent:'Teste de estudante',
        comment:'Teste de comentário',
        movieId:'345',
        likes:1,
        createdAt:new Date(),
        updatedAt:new Date(),
    }];
    private replyCommentsModel__InMemory: Reply_Comment[] = [{
        id:'456',
        nameUser:'Teste de nome de usuário',
        comment:'Teste de reply de comentário',
        commentId:'345',
        likes:null,
        createdAt:new Date(),
        updatedAt:new Date(),
    }];
    async liked(data: ILikeCommentDTO): Promise<number> {
        if(data.isLike){
            if(this.commentsModel__InMemory.some(e => e.id === data.commentId)){
                const like = this.commentsModel__InMemory.filter(e => e.id === data.commentId);
                const handle_like = like[0].likes++;
                return this.commentsModel__InMemory[0].likes;
            }else{
                const like = this.replyCommentsModel__InMemory.filter(e => e.id === data.commentId);
                const handle_like = like[0].likes++;
                return this.replyCommentsModel__InMemory[0].likes;
            };
        }else{
            if(this.commentsModel__InMemory.some(e => e.id === data.commentId)){
                const noLike = this.commentsModel__InMemory.filter(e => e.id === data.commentId);
                const handle_noLike = noLike[0].likes--;
                return this.commentsModel__InMemory[0].likes;
            }else{
                const noLike = this.replyCommentsModel__InMemory.filter(e => e.id === data.commentId);
                const handle_noLike = noLike[0].likes--;
                return this.replyCommentsModel__InMemory[0].likes;
            };
        }
    };
};
