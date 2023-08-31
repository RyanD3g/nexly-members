import { HttpException, Injectable } from "@nestjs/common";
import { ADeleteComment } from "../IDeleteCommentInPost.anyone";
import { IDeleteCommentInPostDTO } from "src/useCases/anyone/deleteOneCommentInPost/DeleteComment.DTO";
import { PrismaService } from "src/database";

@Injectable()
export class DeleteCommentInPostImplementation implements ADeleteComment {
    constructor(
        private readonly prisma:PrismaService,
    ){};
    async commentExists(commentId: string) {
        const exists = await this.prisma.comments_Post.findUnique({
            where:{ id:commentId, },
        });
        return exists;
    };
    async deleteComment(data: IDeleteCommentInPostDTO) {
        const isMy = await this.prisma.comments_Post.findUnique({
            where:{ id:data.commentId, },
        });
        if(isMy.userId !== data.userId){
            throw new HttpException('Comentário não pertence a você.', 403);
        };
        const deleteComment = await this.prisma.comments_Post.deleteMany({
            where:{ id:data.commentId, },
        });
        return { deleted:true, };
    };
};
