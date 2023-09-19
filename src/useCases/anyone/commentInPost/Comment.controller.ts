import { Body, Controller, HttpException, Param, Post, Request } from "@nestjs/common";
import { CommentInPostService } from "./Comment.service";
import { ICommentInPostDTO } from "./Comment.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";

@Controller('comment')
export class CommentInPostController {
    constructor(
        private service:CommentInPostService,
    ){};

    @Post('post/:postId')
    async handle_comment(
        @Body() body:ICommentInPostDTO,
        isTest:boolean = false,
        @Param('postId') postId?:string,
        @Request() req?:CustomRequest,
    ){
        try {
            const sendComment = await this.service.createComment({
                postId: postId || body?.postId,
                nameUserComment:body?.nameUserComment,
                idUserComment:req?.studentId || req?.producerId || body?.idUserComment,
                contentComment:body.contentComment,
            }, isTest);
            return sendComment;
        } catch (error) {
            return error;
        };
    };
};
