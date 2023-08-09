import { Comments_Post, Posts } from "@prisma/client";
import { ICommentInPostDTO } from "src/useCases/anyone/commentInPost/Comment.DTO";

export abstract class ACommentInPost {
    abstract postExists(postId:string): Promise<Posts> | boolean;
    abstract comment(data:ICommentInPostDTO): Promise<Posts> | Comments_Post;
};
