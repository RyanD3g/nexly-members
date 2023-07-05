import { Body, Controller, Delete, Param, Request } from "@nestjs/common";
import { UnfavoriteService } from "./Unfavorite.service";
import { IUnfavoriteDTO } from "./Unfavorite.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";

@Controller('unfavorite')
export class UnfavoriteLessonController {
    constructor(
        private service:UnfavoriteService,
    ){};

    @Delete('lesson/:favoriteId')
    async handle_unfavorite(
        @Body() body?:IUnfavoriteDTO,
        isTest:boolean = false,
        @Param('favoriteId') favoriteId?:string,
    ){
        try {
            const sendUnfavorite = await this.service.unfavoriteAndExists({
                favoriteId: favoriteId || body.favoriteId,
            }, isTest);
            return sendUnfavorite;
        } catch (error) {
            return error;
        };
    };
};
