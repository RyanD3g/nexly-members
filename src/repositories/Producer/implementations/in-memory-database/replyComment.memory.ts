import { Injectable } from "@nestjs/common";
import { AReplyComment } from "../../IReplyComment.producer";
import { IReplyCommentDTO } from "../../../../useCases/producer/replyComment/ReplyComment.DTO";
import { Reply_Comment } from "@prisma/client";

@Injectable()
export class ReplyCommentInMemory implements AReplyComment {
    private ReplyCommentModel__InMemory: Reply_Comment[] = [];
    async comment(data: IReplyCommentDTO): Promise<Reply_Comment> {
        const sendReply = await this.ReplyCommentModel__InMemory.push({
            id:'123',
            likes:null,
            nameUser:data.nameUser,
            comment:data.comment,
            commentId:data.commentId,
            createdAt:new Date(),
            updatedAt:new Date(),
        });
        return this.ReplyCommentModel__InMemory[0];
    };
};
