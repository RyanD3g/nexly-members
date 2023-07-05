import { Comments_movies, Reply_Comment } from "@prisma/client";
import { IReplyCommentDTO } from "src/useCases/producer/replyComment/ReplyComment.DTO";

export abstract class AReplyComment {
    abstract comment(data:IReplyCommentDTO): Promise<Reply_Comment | Comments_movies>;
};
