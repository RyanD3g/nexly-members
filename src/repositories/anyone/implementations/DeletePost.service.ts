import { HttpException, Injectable } from "@nestjs/common";
import { ADeletePost } from "../IDeletePost.anyone";
import { IDeletePostDTO } from "../../../useCases/anyone/deletePost/DeletePost.DTO";
import { PrismaService } from "../../../database";

@Injectable()
export class DeletePostImplementation implements ADeletePost {
    constructor(
        private prisma:PrismaService,
    ){};
    async delete(data: IDeletePostDTO): Promise<Object> {
        const findPost = await this.prisma.posts.findUnique({
            where:{ id:data.postId },
        });

        if(!findPost){
            throw new HttpException('Post inexistente', 404);
        };
        const deletePost = await this.prisma.posts.deleteMany({
            where:{ id:data.postId },
        });
        await this.prisma.$disconnect();
        return { deleted:true, };
    };
};
