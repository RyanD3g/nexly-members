import { IDeleteReplyCommentDTO } from "src/useCases/anyone/deleteReplyComment/DeleteReply.DTO";

export abstract class ADeleteReplyComment {
    abstract isExistsCourse(courseId:string);
    abstract deleteReply(data:IDeleteReplyCommentDTO);
};
