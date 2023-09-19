import { HttpException, Injectable } from "@nestjs/common";
import { ALikeAPost } from "../ILikeAPost.anyone";
import { Likes_By_Posts, Posts } from "@prisma/client";
import { ILikePostDTO } from "../../../useCases/anyone/likeAPost/LikePost.DTO";
import { PrismaService } from "../../../database";

type ILikeAPostReturnImplementation = {
    post:Posts;
    userIsLiked:boolean;
};

@Injectable()
export class LikeAPostImplementation implements ALikeAPost {
    constructor(
        private prisma:PrismaService,
    ){};
    async like(data: ILikePostDTO): Promise<Posts> {
        const liked = await this.prisma.posts.update({
            where:{ id:data.postId },

            data:{
               likes:{
                create:{
                    qntLikes: + 1,
                    userLike: data.userId,
                },
               },
            },
        });
        await this.prisma.$disconnect();
        return liked;
    };
    async userLiked(data:ILikePostDTO): Promise<ILikeAPostReturnImplementation>{
        const post = await this.prisma.posts.findUnique({
            where:{ 
                id:data.postId,
            },
            include:{
                likes:true,
            },
        });
        const userIsLiked = post.likes.some(e => e.userLike === data.userId);
        await this.prisma.$disconnect();
        return { post, userIsLiked };
    };
};
