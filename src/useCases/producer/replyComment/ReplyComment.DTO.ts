import { IsNotEmpty } from "class-validator";

export class IReplyCommentDTO {
    producertId:string;
    commentId:string;
    nameUser?:string;
    
    @IsNotEmpty()
    comment:string;
};
