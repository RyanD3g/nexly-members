import { Injectable } from "@nestjs/common";
import { ALikeComment } from "../ILikeComment.anyone";
import { ILikeCommentDTO } from "../../../useCases/anyone/likeAComment/Like.DTO";
import { PrismaService } from "../../../database";

@Injectable()
export class LikeCommentImplementation implements ALikeComment {
    constructor(
        private prisma:PrismaService,
    ){};
    async liked(data: ILikeCommentDTO): Promise<number> {
        if(data.isLike){
            const commentIsReplyOrNo = await this.prisma.comments_movies.findUnique({
                where:{
                    id:data.commentId,
                },
            });
            if(commentIsReplyOrNo){
                const handle_noLike = await this.prisma.comments_movies.update({
                    where:{
                        id:data.commentId,
                    },

                    data:{
                        likes: +1,
                    },
                });
                return commentIsReplyOrNo.likes;
            }else{
                const like = await this.prisma.reply_Comment.update({
                    where:{
                        id:data.commentId,
                    },

                    data:{
                        likes: +1,
                    },
                });
                return like.likes;
            };
        }else{
            const commentIsReplyOrNo = await this.prisma.comments_movies.findUnique({
                where:{
                    id:data.commentId,
                },
            });
            if(commentIsReplyOrNo){
                const handle_noLike = await this.prisma.comments_movies.update({
                    where:{
                        id:data.commentId,
                    },

                    data:{
                        likes: -1,
                    },
                });
                return commentIsReplyOrNo.likes;
            }else{
                const like = await this.prisma.reply_Comment.update({
                    where:{
                        id:data.commentId,
                    },

                    data:{
                        likes: -1,
                    },
                });
                await this.prisma.$disconnect();
                return like.likes;
            };
        }
    };
};
