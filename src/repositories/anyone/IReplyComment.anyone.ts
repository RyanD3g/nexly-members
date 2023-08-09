import { Comments_Post, ReplyComment_Posts } from "@prisma/client";
import { IReplyCommentPostDTO } from "src/useCases/anyone/replyCommentPost/ReplyComment.DTO";

export abstract class AReplyCommentPost {
    abstract commentExists(commentId:string): boolean | Promise<Comments_Post>;
    abstract replyComment(data:IReplyCommentPostDTO): Promise<Comments_Post> | ReplyComment_Posts[];
};
