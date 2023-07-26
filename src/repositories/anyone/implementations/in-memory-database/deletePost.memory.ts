import { Injectable } from "@nestjs/common";
import { ADeletePost } from "../../IDeletePost.anyone";
import { IDeletePostDTO } from "../../../../useCases/anyone/deletePost/DeletePost.DTO";
import { Posts } from "@prisma/client";

@Injectable()
export class DeletePostInMemory implements ADeletePost {
    private postModel: Posts[] = [
        {
            id:'123',
            likes:2,
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
    delete(data: IDeletePostDTO): Object {
        const findForPost = this.postModel.filter(e => e.id === data.postId);
        if(!findForPost){
            throw new Error('Post inexistente');
        };
        const index = this.postModel.indexOf(findForPost[0]);
        delete this.postModel[index];
        return this.postModel;
    };
};
