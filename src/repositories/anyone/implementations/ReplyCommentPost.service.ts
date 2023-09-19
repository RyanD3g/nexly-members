import { Injectable } from "@nestjs/common";
import { AReplyCommentPost } from "../IReplyComment.anyone";
import { PrismaService } from "src/database";
import { Comments_Post, Producer, ReplyComment_Posts, Student } from "@prisma/client";
import { IReplyCommentPostDTO } from "src/useCases/anyone/replyCommentPost/ReplyComment.DTO";

@Injectable()
export class ReplyCommentPostImplementation implements AReplyCommentPost {
    constructor(
        private prisma:PrismaService,
    ){};
    async commentExists(commentId: string): Promise<Comments_Post> {
        const isExists = await this.prisma.comments_Post.findUnique({
            where:{
                id:commentId,
            },
        });
        return isExists;
    };
    async replyComment({ commentId, contentReplyComment, userId, }: IReplyCommentPostDTO): Promise<Comments_Post> {
        let typeUser: Student | Producer = await this.prisma.student.findUnique({
            where:{ id:userId, },
        });

        const validatonIsStudentOrProducer = !typeUser? typeUser = await this.prisma.producer.findUnique({
            where:{ id:userId, },
        }) : typeUser; 
    
        const sendReplyComment = await this.prisma.comments_Post.update({
            where:{
                id:commentId,
            },
            data:{
                reply:{
                    create:{
                        contentReplyComment,
                        nameUserReplyComment: typeUser.name,
                        userUrlPhoto: typeUser.photo,
                        userId,
                    },
                },
            },
        });
        await this.prisma.$disconnect();
        return sendReplyComment;
    };
};
