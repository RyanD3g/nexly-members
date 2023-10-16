import { Body, Controller, Post, Request } from "@nestjs/common";
import { SaveEventInCalendarService } from "./SaveEvents.service";
import { IDataForSaveEvent } from "./SaveEvents.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";

@Controller('save')
export class SaveEventCalendarController {
    constructor(
        private service:SaveEventInCalendarService,
    ){};

    @Post('event/calendar')
    async sendDataForLogic(
        @Body() body:IDataForSaveEvent,
        isTest:boolean = false,
        @Request() req?:CustomRequest,
    ){
        try {
          const sendDataForService = await this.service.executeCreation({ studentId:req?.studentId || body.studentId, ...body }, isTest);
          return sendDataForService;
        } catch (error) {
            return error;
        };
    };
};
