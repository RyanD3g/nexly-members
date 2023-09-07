import { Body, Controller, Delete, Param, Request } from "@nestjs/common";
import { DeleteCommentInPostService } from "./DeleteComment.service";
import { IDeleteCommentInPostDTO } from "./DeleteComment.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";

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
        @Request() req?:CustomRequest,
    ){
        try {
            const deleteComment = await this.service.executeDelete({
                commentId: commentId || body.commentId,
                userId: body?.userId || req?.producerId || req?.studentId,
            }, isTest);
            return deleteComment;
        } catch (error) {
            return error;
        };
    };
};
