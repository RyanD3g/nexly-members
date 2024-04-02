import { Body, Controller, HttpException, Param, Post, Request } from "@nestjs/common";
import { CommentInPostService } from "./Comment.service";
import { CommentinPostResponseDto, ICommentInPostDTO, ParamDtoComments } from "./Comment.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";
import { ApiOkResponse, ApiParam, ApiTags } from "@nestjs/swagger";

@ApiTags("Anyone")
@Controller('comment')
export class CommentInPostController {
    constructor(
        private service:CommentInPostService,
    ){};

    @Post('post/:postId')
    @ApiParam({ type:ParamDtoComments, name:"postId" })
    @ApiOkResponse({ description:"Handle comment users", type:CommentinPostResponseDto })
    async handle_comment(
        @Body() body:ICommentInPostDTO,
        isTest:boolean = false,
        @Param('postId') postId?:string,
        @Request() req?:CustomRequest,
    ): Promise<CommentinPostResponseDto>{
        try {
            const sendComment = await this.service.createComment({
                postId: postId || body?.postId,
                nameUserComment:body?.nameUserComment,
                idUserComment:req?.studentId || req?.producerId || body?.idUserComment,
                contentComment:body.contentComment,
            }, isTest);
            return sendComment as CommentinPostResponseDto;
        } catch (error) {
            return error;
        };
    };
};
