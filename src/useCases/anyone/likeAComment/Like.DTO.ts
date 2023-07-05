import { IsNotEmpty } from "class-validator";

export class ILikeCommentDTO{
    commentId:string;

    @IsNotEmpty()
    isLike:boolean;
};
