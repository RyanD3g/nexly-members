import { Body, Controller, Get, Param, Request } from "@nestjs/common";
import { TicketsAndRoomService } from "./TicketsAndRoom.service";
import { CustomRequest } from "src/interfaces/Request.interface";
import { ITicketsDTO } from "./TicketsAndRoom.DTO";

@Controller('ticketsAndRoom')
export class TicketsAndRoomController {
    constructor(
        private service:TicketsAndRoomService,
    ){};

    @Get('all/student')
    async allMyData(
        @Body() body:ITicketsDTO,
        isTest:boolean = false,
        @Request() req?:CustomRequest,
    ){
        try {
            const myAll = await this.service.myData({
                studentId: req?.studentId || body?.studentId,
                ticketId: body?.ticketId,
            }, isTest);
            return myAll;
        } catch (error) {
            return error;
        }
    };
};
