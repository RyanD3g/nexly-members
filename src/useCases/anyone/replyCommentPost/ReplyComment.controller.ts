import { Body, Controller, Param, Post, Request } from "@nestjs/common";
import { ReplyCommentPostService } from "./ReplyComment.service";
import { IReplyCommentPostDTO } from "./ReplyComment.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";

@Controller('reply')
export class ReplyCommentPostController {
    constructor(
        private service:ReplyCommentPostService,
    ){};

    @Post('comment/:commentId')
    async handle_comment(
        @Body() body:IReplyCommentPostDTO,
        isTest:boolean = false,
        @Param('commentId') commentId?:string,
        @Request() req?:CustomRequest,
    ){
        try {
            const sendReplyComment = await this.service.execute({
                commentId: commentId || body?.commentId,
                contentReplyComment:body.contentReplyComment,
                nameUserReplyComment:body?.nameUserReplyComment,
                userId: req?.studentId || req?.producerId || body?.userId,
                userUrlPhoto:body?.userUrlPhoto,
            }, isTest);
            return sendReplyComment;  
        } catch (error) {
            console.log(error)
            return error;
        };
    };
};
