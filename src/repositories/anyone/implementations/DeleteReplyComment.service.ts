import { HttpException, Injectable } from "@nestjs/common";
import { ADeleteReplyComment } from "../IDeleteReplyComment.anyone";
import { IDeleteReplyCommentDTO } from "src/useCases/anyone/deleteReplyComment/DeleteReply.DTO";
import { PrismaService } from "src/database";

@Injectable()
export class DeleteReplyCommentImplementation implements ADeleteReplyComment {
    constructor(
        private prisma:PrismaService,
    ){};
    async isExistsCourse(replyId: string) {
        const isExistsComment = await this.prisma.replyComment_Posts.findUnique({
            where:{ id:replyId, },
        });
        return isExistsComment;
    };
    async deleteReply(data: IDeleteReplyCommentDTO) {
        const findForComment = await this.prisma.replyComment_Posts.findUnique({
            where:{ id:data.replyCommentId, },
        });
        if(findForComment.userId !== data.userId){
            throw new HttpException({
                status:403,
                error: 'Esse comentário não é seu!!',
            }, 403);
        };
        const deleteComment = await this.prisma.replyComment_Posts.deleteMany({
            where:{
                id:data.userId,
            },
        });
        return { deleted:true, };
    };
};
