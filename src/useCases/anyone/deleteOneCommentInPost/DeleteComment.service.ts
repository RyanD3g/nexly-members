import { HttpException, Injectable } from "@nestjs/common";
import { DeleteCommentInPostImplementation } from "src/repositories/anyone/implementations/DeleteCommentInPost.service";
import { DeleteCommentInPostInMemory } from "src/repositories/anyone/implementations/in-memory-database/deleteCommentInPost.memory";
import { IDeleteCommentInPostDTO } from "./DeleteComment.DTO";
import { AsyncLocalStorage } from "async_hooks";
import { dataForStorage } from "src/contexts/userId.context";

@Injectable()
export class DeleteCommentInPostService {
    constructor(
        private implementation:DeleteCommentInPostImplementation,
        private inMemory:DeleteCommentInPostInMemory,
        private readonly context:AsyncLocalStorage<Partial<dataForStorage>>,
    ){};

    async executeDelete(data:IDeleteCommentInPostDTO, isTest:boolean){
        if(!data.userId){
            data.userId = this.context.getStore()["userId"];
        };
        if(isTest){
            const isExistsComment = this.inMemory.commentExists(data.commentId);
            if(!isExistsComment){
                throw new Error("Comentário inexistente!!");
            };
            const deleteComment = this.inMemory.deleteComment(data);
            return deleteComment;
        };
        const isExistsComment = await this.implementation.commentExists(data.commentId);
            if(!isExistsComment){
                throw new HttpException("Comentário inexistente!!", 404);
            };
        const deleteComment = this.implementation.deleteComment(data);
        return deleteComment;
    };
};
