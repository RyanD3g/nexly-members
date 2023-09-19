import { Injectable } from "@nestjs/common";
import { ACommentInPost } from "../../ICommentInPost.anyone";
import { Posts, Comments_Post } from "@prisma/client";
import { ICommentInPostDTO } from "src/useCases/anyone/commentInPost/Comment.DTO";

@Injectable()
export class CommentInPostInMemory implements ACommentInPost {
    private postModel: Posts[] = [
        {
            id:'123',
            createdAt:new Date(),
            updatedAt:new Date(),
            share:2,
            urlPhotoPost:'Teste',
            contentPost:'Teste',
            producerId:'Teste',
            momentPost:'Teste',
            studentId:'Teste',
        },
    ];
    private commentsModel: Comments_Post[] = [];
    postExists(postId: string): boolean {
        const isExists = this.postModel.some(e => e.id === postId);
        return isExists;
    };
    comment(data: ICommentInPostDTO): Comments_Post {
        const createComment = this.commentsModel.push({
            id:'123',
            userUrlPhoto:'teste.com.br',
            userId:data.idUserComment,
            contentComment:data.contentComment,
            nameUserComment:data.nameUserComment,
            commentPostId:data.postId,
            createdAt:new Date(),
            updatedAt:new Date(),
        });
        return this.commentsModel[0];
    };
};
