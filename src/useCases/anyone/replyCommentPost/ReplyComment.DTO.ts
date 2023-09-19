import { IsNotEmpty } from "class-validator";

export class IReplyCommentPostDTO {
    nameUserReplyComment?:string;

    @IsNotEmpty()
    contentReplyComment:string;

    userId:string;

    userUrlPhoto:string;       
    
    commentId:string;
};
