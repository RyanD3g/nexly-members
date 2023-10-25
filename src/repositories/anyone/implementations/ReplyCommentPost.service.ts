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
    async replyComment({ commentId, contentReplyComment, userId, isProducer, nameUserReplyComment}: IReplyCommentPostDTO): Promise<Comments_Post> {
        let typeUser: Student | Producer;

        const validatonIsStudentOrProducer = !isProducer? typeUser = await this.prisma.student.findUnique({
            where:{ id:userId, },
        }) : typeUser = await this.prisma.producer.findUnique({
            where:{ id:userId, },
        });
    
        const sendReplyComment = await this.prisma.comments_Post.update({
            where:{
                id:commentId,
            },
            include:{
                reply:true,
            },
            data:{
                reply:{
                    create:{
                        contentReplyComment,
                        nameUserReplyComment,
                        userUrlPhoto: typeUser.photo,
                        userId:typeUser.id,
                    },
                },
            },
        });
        await this.prisma.$disconnect();
        return sendReplyComment;
    };
};
