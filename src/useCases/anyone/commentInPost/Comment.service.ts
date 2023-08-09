import { HttpException, Injectable } from "@nestjs/common";
import { CommentInPostImplentation } from "src/repositories/anyone/implementations/CommentInPost.service";
import { CommentInPostInMemory } from "src/repositories/anyone/implementations/in-memory-database/commentInPost.memory";
import { ICommentInPostDTO } from "./Comment.DTO";

@Injectable()
export class CommentInPostService {
    constructor(
        private inMemory:CommentInPostInMemory,
        private implementation:CommentInPostImplentation,
    ){};

    async createComment(data:ICommentInPostDTO, isTest:boolean){
        if(isTest){
            const postIsExists = this.inMemory.postExists(data.postId);
            if(!postIsExists){
                throw new Error('Post inexistente!!');
            };
            const sendCommentInMemory = this.inMemory.comment(data);
            return sendCommentInMemory;
        };
        const postIsExists = await this.implementation.postExists(data.postId);
        if(!postIsExists){
            throw new HttpException('Post inexistente!!', 404);
        };
        const sendCommentImplementation = await this.implementation.comment(data);
        return sendCommentImplementation;
    };
};
