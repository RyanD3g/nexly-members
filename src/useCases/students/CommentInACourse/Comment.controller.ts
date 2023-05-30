import { Body, Controller, Param, Post, Request } from "@nestjs/common";
import { CommentInLessonService } from "./Comment.service";
import { ICommentDTO } from "./Comment.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";

@Controller('comment')
export class CommentInLessonController {
    constructor(
        private service:CommentInLessonService,
    ){};

    @Post('lesson/:lessonId')
    async handle_comment(
        @Body() body:ICommentDTO,
        isTest:boolean = false,
        @Request() req?:CustomRequest,
        @Param('lessonId') lessonIdParam?:string,
    ){
        try {
            const commented = await this.service.createComment({
                lessonId:lessonIdParam || body.lessonId,
                commentContent:body.commentContent,
                studentId:req?.studentId || body.studentId,
            }, isTest);
            return commented;
        } catch (error) {
            return error;
        }
    };
};
