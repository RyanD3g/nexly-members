import { Injectable } from "@nestjs/common";
import { LikeCommentImplementation } from "../../../repositories/anyone/implementations/LikeComment.service";
import { LikeCommentInMemory } from "../../../repositories/anyone/implementations/in-memory-database/LikeComment.memory";
import { ILikeCommentDTO } from "./Like.DTO";

@Injectable()
export class LikeCommentService {
    constructor(
        private inMemory:LikeCommentInMemory,
        private implementation:LikeCommentImplementation,
    ){};

    async likeInComment(data:ILikeCommentDTO, isTest:boolean){
        if(isTest){
            const liked = await this.inMemory.liked(data);
            return liked;
        };
        const liked = await this.implementation.liked(data);
        return liked;
    };
};
