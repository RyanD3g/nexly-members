import { Body, Controller, Get, Request } from "@nestjs/common";
import { GetEventsService } from "./GetEvents.service";
import { IGetMyEvents } from "./GetEvents.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";

@Controller('events')
export class GetEventsController {
    constructor(
        private service:GetEventsService,
    ){};
    
    @Get('calendar')
    async getAllMyEventsOnCalendar(
        @Body() body?:IGetMyEvents,
        isTest: boolean = false,
        @Request() req?:CustomRequest,
    ){
        try {
            const getEvents = await this.service.allEvents({
                studentId:req?.studentId || body?.studentId,
                calendarId:body?.calendarId,
            }, isTest);
            return getEvents;
        } catch (error) {
            return error;
        };
    };
};
