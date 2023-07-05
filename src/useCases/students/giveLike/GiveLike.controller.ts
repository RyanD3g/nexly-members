import { Body, Controller, Put, Request } from "@nestjs/common";
import { GiveLikeService } from "./GiveLike.service";
import { CustomRequest } from "src/interfaces/Request.interface";
import { IGiveLikeDTO } from "./GiveLike.DTO";

@Controller('like')
export class GiveLikeController {
    constructor(
        private service:GiveLikeService,
    ){};

    @Put('course')
    async handle_like(
        @Body() body:IGiveLikeDTO,
        isTest:boolean = false,
    ){
        try {
            const liked = await this.service.MoreLike({ lessonId:body.lessonId }, isTest);
            return liked;
        } catch (error) {
            return error;
        }
    };
};
