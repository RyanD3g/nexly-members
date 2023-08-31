import { Injectable } from "@nestjs/common";
import { ADeleteReplyComment } from "../../IDeleteReplyComment.anyone";
import { IDeleteReplyCommentDTO } from "src/useCases/anyone/deleteReplyComment/DeleteReply.DTO";
import { ReplyComment_Posts } from "@prisma/client";

@Injectable()
export class DeleteReplyCommentInMemory implements ADeleteReplyComment {
    private ReplyCommentModel: ReplyComment_Posts[] = [
        {
            id:'123',
            userUrlPhoto:'teste.com.br',
            contentReplyComment:'Teste de conteúdo',
            nameUserReplyComment:'Teste de nome',
            userId:'000',
            replyId:'7890',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ];
    isExistsCourse(replyId: string) {
        const isExistsReply = this.ReplyCommentModel.some(e => e.id === replyId);
        return isExistsReply;
    };
    deleteReply(data: IDeleteReplyCommentDTO) {
        const deleteReplyComment = this.ReplyCommentModel.filter(e => e.id === data.replyCommentId);
        const isMyComment = deleteReplyComment.some(e => e.id === data.userId);
        if(!isMyComment){
            throw new Error('Comentário não pertence a você!!');
        };
        const findForNumberIndex = this.ReplyCommentModel.indexOf(deleteReplyComment[0]);
        delete this.ReplyCommentModel[findForNumberIndex];
        return this.ReplyCommentModel;
    };
};
