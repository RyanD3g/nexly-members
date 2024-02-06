import { Controller, Get, Param } from "@nestjs/common";
import { ReturnItemsPlaylistService } from "./returnItems.service";
import { IReturnItemsPlaylist } from "./returnItems.DTO";
import { logger } from "winston.preload";

@Controller('return')
export class ReturnItemsController {
    constructor(
        private service:ReturnItemsPlaylistService,
    ){};

    @Get('items/playlist/:courseYtId')
    async returnItems(
        @Param('courseYtId') courseYtId:string,
    ){
        try {
            return this.service.returnItems({ courseYtId, });
        } catch (error) {
            logger.error(`Houve um erro ao retornar items da playlist /items/playlist/:courseYtId: ${error}`);
            if(error?.length === 0 || !error){
                logger.info(`Houve um erro ao retornar o erro, os logs devem ser verificados!!`);
                return { erro:"Houve um erro com a api, os logs serão verificados." };
            };
            return error;
        };
    };
};
