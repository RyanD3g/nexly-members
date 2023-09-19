import { Injectable } from "@nestjs/common";
import { ACommentInPost } from "../ICommentInPost.anyone";
import { Posts, Student, Producer } from "@prisma/client";
import { ICommentInPostDTO } from "src/useCases/anyone/commentInPost/Comment.DTO";
import { PrismaService } from "src/database";

@Injectable()
export class CommentInPostImplentation implements ACommentInPost {
    constructor(
        private prisma:PrismaService,
    ){};
    async postExists(postId: string): Promise<Posts> {
        const isExists = await this.prisma.posts.findUnique({
            where:{
                id:postId,
            },
        });
        return isExists;
    };
    async comment(data: ICommentInPostDTO): Promise<Posts> {
        let isStudentOrProducer: Student | Producer = await this.prisma.student.findUnique({
            where:{
                id:data.idUserComment,
            },
        });
        const User = !isStudentOrProducer? isStudentOrProducer = await this.prisma.producer.findUnique({
            where:{
                id:data.idUserComment,
            },
        }): isStudentOrProducer;

        const send_comment = await this.prisma.posts.update({
            where:{
                id:data.postId,
            },

            data:{
                Comments:{
                    create:{
                        userUrlPhoto:User.photo,
                        nameUserComment:User.name,
                        userId:User.id,
                        contentComment:data.contentComment,
                    },
                },
            },
        });
        await this.prisma.$disconnect();
        return send_comment;
    };
};
