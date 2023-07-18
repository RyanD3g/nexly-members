import { Body, Controller, Param, Post, Request } from "@nestjs/common";
import { ResponseTicketService } from "./CreateRoom.service";
import { IResponseTicketDTO } from "./NewChat.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";
import { NewChatGateway } from "./NewChat.gateway";

@Controller('create')
export class NewChatController {
    constructor(
        private service:ResponseTicketService,
    ){};

    @Post('room/:ticketId')
    async createRoom(
        @Body() body:IResponseTicketDTO,
        @Param('ticketId') ticketId:string,
        @Request() req:CustomRequest,
    ){
        try {
            const create = await this.service.createRoomByTicket({
                nameRoom:body.nameRoom,
                producerId:req.producerId,
                ticketId,
            });
            return create;
        } catch (error) {
            return error;
        };
    };
};
