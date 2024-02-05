import { Controller, Get, Param } from "@nestjs/common";
import { ReturnItemsPlaylistService } from "./returnItems.service";
import { IReturnItemsPlaylist } from "./returnItems.DTO";

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
            return error;
        };
    };
};
