import { Body, Controller, Post, Request } from "@nestjs/common";
import { ChangeFavoriteService } from "./ChangeFavorite.service";
import { IChangeFavoriteDTO } from "./ChangeFavorite.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";

@Controller('change-favorite')
export class ChangeFavoriteController {
    constructor(
        private service:ChangeFavoriteService,
    ){};

    @Post('lesson/student')
    async change_favorite(
        @Body() body:IChangeFavoriteDTO,
        isTest:boolean = false,
        @Request() req?:CustomRequest,
    ){
        const changed = await this.service.changedLesson({
            lessonId:body.lessonId,
            lessonName:body.lessonName,
            studentId:req?.studentId,
        }, isTest);
        return changed;
    };
};
