import { Body, Controller, Param, Post, Request } from "@nestjs/common";
import { ReplyCommentPostService } from "./ReplyComment.service";
import { IReplyCommentPostDTO } from "./ReplyComment.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";

@Controller('reply')
export class ReplyCommentPostController {
    private userId:string;
    private isProducer:boolean;
    constructor(
        private service:ReplyCommentPostService,
    ){};
    @Post('comment/post/:commentId')
    async handle_comment(
        @Body() body:IReplyCommentPostDTO,
        isTest:boolean = false,
        @Param('commentId') commentId?:string,
        @Request() req?:CustomRequest,
    ){
       
            if(!req.producerId){
                this.userId = req.studentId;
                this.isProducer = false;
            }else{
                this.userId = req.producerId;
                this.isProducer = true;
            };
            const sendReplyComment = await this.service.execute({
                commentId: commentId || body?.commentId,
                contentReplyComment:body.contentReplyComment,
                nameUserReplyComment:body?.nameUserReplyComment,
                userId: body?.userId || this?.userId,
                userUrlPhoto:body?.userUrlPhoto,
                isProducer:this?.isProducer,
            }, isTest);
            return sendReplyComment;
    };
};
