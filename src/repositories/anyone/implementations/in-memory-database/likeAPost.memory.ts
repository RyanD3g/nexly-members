import { Injectable } from "@nestjs/common";
import { ALikeAPost } from "../../ILikeAPost.anyone";
import { Likes_By_Posts, Posts } from "@prisma/client";
import { ILikePostDTO } from "../../../../useCases/anyone/likeAPost/LikePost.DTO";

type ILikeAPostReturn = {
    findPost:boolean;
    findUser:boolean;
};

@Injectable()
export class LikePostInMemory implements ALikeAPost {
    private postModel:Posts[] = [{
        id:'123',
        contentPost:'Teste de conteúdo',
        share:0,
        urlPhotoPost:'testedeurl.com',
        momentPost:'2023-07-12',
        studentId:'578',
        producerId:null,
        createdAt:new Date(),
        updatedAt:new Date(),
    }];
    private likeModel:Likes_By_Posts[] = [];

    like(data: ILikePostDTO): Likes_By_Posts[] {
        const findPost = this.postModel.filter(e => e.id === data.postId);
        if(!findPost){
            throw new Error('Post Inexistente!!');
        };
        const liked = data.isLike && this.likeModel.push({
            id:'123',
            postId:'321',
            qntLikes: + 1,
            userLike:data.userId,
            createdAt:new Date(),
            updatedAt:new Date(),
        });
        
        return this.likeModel;
    };
    userLiked(data: ILikePostDTO): ILikeAPostReturn {
        const findPost = this.postModel.some(e => e.id === data.postId);
        const findUser = this.likeModel.some(e => e.userLike === data.userId);
        return { findPost, findUser };
    };
};
