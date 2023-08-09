import { IsNotEmpty } from "class-validator";

export class ICommentInPostDTO {
    @IsNotEmpty()
    contentComment:string;
    
    nameUserComment:string;
    idUserComment:string;
    postId:string;
};
