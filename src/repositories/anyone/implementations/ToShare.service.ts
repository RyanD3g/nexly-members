import { HttpException, Injectable } from "@nestjs/common";
import { AToSharePost } from "../IToShare.anyone";
import { Student, Producer, Posts } from "@prisma/client";
import { IToShareDTO } from "../../../useCases/anyone/toShare/ToShare.DTO";
import { PrismaService } from "../../../database";

@Injectable()
export class ToShareImplementation implements AToSharePost {
    constructor(
        private prisma:PrismaService,
    ){};
    async sharePost(data: IToShareDTO, isStudent:boolean): Promise<Student | Producer | Posts> {
        if(isStudent){
            const returnPost = await this.prisma.student.findUnique({
                where:{ id:data.userId, },

                include:{
                    posts:{
                        where:{ 
                            id:data.postId,
                        },
                    },
                },
            });
            if(!returnPost.posts){
                throw new HttpException('Post inexistente', 404);
            };
            await this.prisma.posts.update({
                where:{ id:data.postId },
                data:{
                    share: + 1,
                },
            });
            await this.prisma.$disconnect();
            return returnPost;
        };
        const returnPost = await this.prisma.producer.findUnique({
            where:{ id:data.userId, },

            include:{
                posts:{
                    where:{ 
                        id:data.postId,
                    },
                },
            },
        });
        if(!returnPost.posts){
            throw new HttpException('Post inexistente', 404);
        };
        await this.prisma.posts.update({
            where:{ id:data.postId },
            data:{
                share: + 1,
            },
        });
        await this.prisma.$disconnect();
        return returnPost;
    };
};
