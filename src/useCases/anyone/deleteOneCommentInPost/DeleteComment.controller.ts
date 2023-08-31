import { Body, Controller, Delete, Param } from "@nestjs/common";
import { DeleteCommentInPostService } from "./DeleteComment.service";
import { IDeleteCommentInPostDTO } from "./DeleteComment.DTO";

@Controller('delete')
export class DeleteCommentInPostController {
    constructor(
        private service:DeleteCommentInPostService,
    ){};

    @Delete('comment/post/:commentId')
    async handle_delete(
        @Body() body?:IDeleteCommentInPostDTO,
        isTest:boolean = false,
        @Param('commentId') commentId?:string,
    ){
        try {
            const deleteComment = await this.service.executeDelete({
                commentId: commentId || body.commentId,
                userId: body?.userId,
            }, isTest);
            return deleteComment;
        } catch (error) {
            return error;
        };
    };
};
