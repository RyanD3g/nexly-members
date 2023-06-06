import { Injectable } from "@nestjs/common";
import { AReplyComment } from "../IReplyComment.producer";
import { Comments_movies, Producer, Reply_Comment, Student } from "@prisma/client";
import { IReplyCommentDTO } from "../../../useCases/producer/replyComment/ReplyComment.DTO";
import { PrismaService } from "../../../database";

@Injectable()
export class ReplyCommentImplementation implements AReplyComment {
    constructor(
        private prisma:PrismaService,
    ){};
    async comment(data: IReplyCommentDTO): Promise<Comments_movies> {
        let userId: Producer | Student;

        const findByStudent = await this.prisma.student.findUnique({
            where:{ id:data.producertId, },
        });

        if(findByStudent){
            userId = findByStudent;
        }else{
            userId = await this.prisma.producer.findUnique({
                where:{ id:data.producertId, },
            });
        };
        const sendComment = await this.prisma.comments_movies.update({
            where:{ id:data.commentId },
            include:{ replyComment:true },

            data:{
                replyComment:{
                    create:{
                        nameUser:userId.name,
                        comment:data.comment,
                    },
                },
            },
        });
        await this.prisma.$disconnect();
        return sendComment;
    };
};
