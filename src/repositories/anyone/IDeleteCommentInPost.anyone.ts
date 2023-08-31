import { IDeleteCommentInPostDTO } from "src/useCases/anyone/deleteOneCommentInPost/DeleteComment.DTO";

export abstract class ADeleteComment {
    abstract commentExists(commentId:string);
    abstract deleteComment(data:IDeleteCommentInPostDTO);
};
