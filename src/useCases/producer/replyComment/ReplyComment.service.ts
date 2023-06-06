import * as dayjs from 'dayjs';
import { Injectable } from "@nestjs/common";
import { ReplyCommentImplementation } from "../../../repositories/Producer/implementations/ReplyComment.service";
import { ReplyCommentInMemory } from "../../../repositories/Producer/implementations/in-memory-database/replyComment.memory";
import { IReplyCommentDTO } from "./ReplyComment.DTO";
import { IsDeleteCourseImplementation } from "../../../repositories/anyone/implementations/IsDeleteCourse.service";

@Injectable()
export class ReplyCommentService {
    constructor(
        private inMemory:ReplyCommentInMemory,
        private implementation:ReplyCommentImplementation,
        private isDeleteCourse:IsDeleteCourseImplementation,
    ){};

    async createReply(data:IReplyCommentDTO, isTest:boolean){
        if(isTest){
            const reply = await this.inMemory.comment(data);
            return reply;
        };
        const isDelete = await this.isDeleteCourse.isDelete(dayjs().format('DD/MM/YYYY'));
        const reply = await this.implementation.comment(data);
        return reply;
    };
};
