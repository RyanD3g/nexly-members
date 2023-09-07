import { Body, Controller, Delete, Param, Request } from "@nestjs/common";
import { DeleteReplyCommentService } from "./DeleteReply.service";
import { IDeleteReplyCommentDTO } from "./DeleteReply.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";

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
        @Request() req?:CustomRequest,
    ){
        try {
            const deleteWithService = await this.service.executeDelete({
                replyCommentId:replyId || body?.replyCommentId,
                userId:body?.userId || req?.producerId || req?.studentId,
            }, isTest);
            return deleteWithService;
        } catch (error) {
            return error;  
        };
    };
};
