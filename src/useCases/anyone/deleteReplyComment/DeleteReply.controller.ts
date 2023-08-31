import { Body, Controller, Delete, Param } from "@nestjs/common";
import { DeleteReplyCommentService } from "./DeleteReply.service";
import { IDeleteReplyCommentDTO } from "./DeleteReply.DTO";

@Controller('delete')
export class DeleteReplyCommentController {
    constructor(
        private service:DeleteReplyCommentService,
    ){};
    @Delete('replyComment/:replyId')
    async handle_delete(
        @Body() body?:IDeleteReplyCommentDTO,
        isTest:boolean = false,
        @Param('replyId') replyId?:string,
    ){
        try {
            const deleteWithService = await this.service.executeDelete({
                replyCommentId:replyId || body?.replyCommentId,
                userId:body?.userId,
            }, isTest);
            return deleteWithService;
        } catch (error) {
            return error;  
        };
    };
};
