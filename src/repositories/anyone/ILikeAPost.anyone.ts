import { Likes_By_Posts, Posts } from "@prisma/client";
import { ILikePostDTO } from "../../useCases/anyone/likeAPost/LikePost.DTO";

export abstract class ALikeAPost {
    abstract like(data:ILikePostDTO): Promise<Posts> | Likes_By_Posts[];
    abstract userLiked(data?:ILikePostDTO): Promise<Object> | Object;
};
