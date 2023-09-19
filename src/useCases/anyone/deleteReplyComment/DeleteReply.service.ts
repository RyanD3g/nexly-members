import { HttpException, Injectable } from "@nestjs/common";
import { DeleteReplyCommentImplementation } from "src/repositories/anyone/implementations/DeleteReplyComment.service";
import { DeleteReplyCommentInMemory } from "src/repositories/anyone/implementations/in-memory-database/deleteReplyComment.memory";
import { IDeleteReplyCommentDTO } from "./DeleteReply.DTO";
import { AsyncLocalStorage } from "async_hooks";
import { dataForStorage } from "src/contexts/userId.context";

@Injectable()
export class DeleteReplyCommentService {
    constructor(
        private implementation:DeleteReplyCommentImplementation,
        private inMemory:DeleteReplyCommentInMemory,
    ){};

    async executeDelete(data:IDeleteReplyCommentDTO, isTest:boolean){
        if(isTest){
            const IsMyComment = this.inMemory.isExistsCourse(data.replyCommentId);
            if(!IsMyComment){
                throw new Error('Comentário inexistente!!');
            };
            const deleteComment = this.inMemory.deleteReply(data);
            return deleteComment;
        };
        const IsMyComment = await this.implementation.isExistsCourse(data.replyCommentId);
        if(!IsMyComment){
            throw new HttpException({
                status: 404,
                error:'Comentário inexistente!!',
            }, 404);
        };
        const deleteComment = await this.implementation.deleteReply(data);
        return deleteComment;
    };
};
