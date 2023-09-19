import { HttpException, Injectable } from "@nestjs/common";
import { IReplyCommentPostDTO } from "./ReplyComment.DTO";
import { ReplyCommentPostInMemory } from "src/repositories/anyone/implementations/in-memory-database/replyCommentPost.memory";
import { ReplyCommentPostImplementation } from "src/repositories/anyone/implementations/ReplyCommentPost.service";

@Injectable()
export class ReplyCommentPostService {
    constructor(
        private inMemory:ReplyCommentPostInMemory,
        private implementation:ReplyCommentPostImplementation,
    ){};

    async execute(data:IReplyCommentPostDTO, isTest:boolean){
        if(isTest){
            const verification = this.inMemory.commentExists(data.commentId);
            if(!verification){
                throw new Error('Comentário inexistente!!');
            };
            const sendReplyComment = this.inMemory.replyComment(data);
            return sendReplyComment;
        };
        const verification = await this.implementation.commentExists(data.commentId);
        if(!verification){
            throw new HttpException('Comentário inexistente!!', 404);
        };
        const sendReplyComment = await this.implementation.replyComment(data);
        return sendReplyComment;
    };
};
