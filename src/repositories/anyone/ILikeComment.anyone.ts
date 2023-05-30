import { Comments_movies, Reply_Comment } from "@prisma/client";
import { ILikeCommentDTO } from "src/useCases/anyone/likeAComment/Like.DTO";

export abstract class ALikeComment {
    abstract liked(data:ILikeCommentDTO): Promise<number>;
};
