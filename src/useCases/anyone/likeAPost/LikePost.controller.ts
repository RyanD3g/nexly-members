import { Body, Controller, HttpException, Param, Post, Request } from "@nestjs/common";
import { LikeAPostService } from "./LikePost.service";
import { ILikePostDTO } from "./LikePost.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";

@Controller('like')
export class LikePostController {
    constructor(
        private service:LikeAPostService,
    ){};

    @Post('post/:postId')
    async handle_toGiveLike(
        @Body() body?:ILikePostDTO,
        isTest:boolean = false,
        @Param('postId') postId?:string,
        @Request() req?:CustomRequest,
    ){
        try {
            const like = await this.service.executeLike({
                isLike: body.isLike,
                postId: postId || body.postId,
                userId: req?.producerId || req?.studentId || body?.userId,
            }, isTest);
            return like;
        } catch (error) {
          return error as HttpException;  
        };
    };
};
