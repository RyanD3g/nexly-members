import { Body, Controller, Param, Put } from "@nestjs/common";
import { LikeCommentService } from "./Like.service";
import { ILikeCommentDTO } from "./Like.DTO";

@Controller('like')
export class LikeCommentController {
    constructor(
        private service:LikeCommentService,
    ){};

    @Put('comment/:commentId')
    async likeInCommentOrReplyComment(
        @Body() body:ILikeCommentDTO,
        isTest:boolean = false,
        @Param('commentId') param?:string,
    ){
        const liked = await this.service.likeInComment({
            commentId:param || body.commentId,
            isLike:body.isLike,
        }, isTest);
        return liked;
    };
};
