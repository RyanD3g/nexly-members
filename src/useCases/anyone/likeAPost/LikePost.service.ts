import { HttpException, Injectable } from "@nestjs/common";
import { LikeAPostImplementation } from "../../../repositories/anyone/implementations/LikeAPost.service";
import { LikePostInMemory } from "../../../repositories/anyone/implementations/in-memory-database/likeAPost.memory";
import { ILikePostDTO } from "./LikePost.DTO";

@Injectable()
export class LikeAPostService {
    constructor(
        private implementation:LikeAPostImplementation,
        private inMemory:LikePostInMemory,
    ){};

    async executeLike(data:ILikePostDTO, isTest:boolean){
        if(isTest){
            const { findPost, findUser } = this.inMemory.userLiked(data);
            if(!findPost)throw new Error('Post inexistente!!');
            if(findUser) throw new Error('Like já anotado!!');
            const likeInMemory = this.inMemory.like(data);
            return likeInMemory;
        };
        const { post, userIsLiked } = await this.implementation.userLiked(data);
        if(!post)throw new HttpException('Post inexistente!!', 404);
        if(userIsLiked) throw new HttpException('Like já anotado!!', 400);
        const likeImplementation = await this.implementation.like(data);
        return likeImplementation;
    };
};
