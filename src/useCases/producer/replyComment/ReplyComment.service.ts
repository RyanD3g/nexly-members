import { Injectable } from "@nestjs/common";
import { ReplyCommentImplementation } from "../../../repositories/Producer/implementations/ReplyComment.service";
import { ReplyCommentInMemory } from "../../../repositories/Producer/implementations/in-memory-database/replyComment.memory";
import { IReplyCommentDTO } from "./ReplyComment.DTO";

@Injectable()
export class ReplyCommentService {
    constructor(
        private inMemory:ReplyCommentInMemory,
        private implementation:ReplyCommentImplementation,
    ){};

    async createReply(data:IReplyCommentDTO, isTest:boolean){
        if(isTest){
            const reply = await this.inMemory.comment(data);
            return reply;
        };
        const reply = await this.implementation.comment(data);
        return reply;
    };
};
