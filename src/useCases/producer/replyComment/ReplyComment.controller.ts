import { Body, Controller, Param, Post, Request } from "@nestjs/common";
import { ReplyCommentService } from "./ReplyComment.service";
import { IReplyCommentDTO } from "./ReplyComment.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";

@Controller('reply')
export class ReplyCommentController {
    constructor(
        private service:ReplyCommentService,
    ){};

    @Post('comment/:commentId')
    async commentReply(
        @Body() body:IReplyCommentDTO,
        isTest:boolean = false,
        @Param('commentId') param?:string,
        @Request() req?:CustomRequest,
    ){
        try {
            const createComment = await this.service.createReply({
                comment:body.comment,
                commentId:param || body.commentId,
                producertId:req?.producerId || req?.studentId || body?.producertId,
                nameUser:body.nameUser,
            }, isTest);
            return createComment;
        } catch (error) {
            return error;
        };
    };
};
