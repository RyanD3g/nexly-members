import { Body, Controller, Post, Request } from "@nestjs/common";
import { CreateEventSheduledService } from "./CreateEvent.service";
import { IDataNecessaryToSheduleEvent } from "./CreateEvent.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";

@Controller('create')
export class CreateNewEventOnCalendarController {
    constructor(
        private service:CreateEventSheduledService,
    ){};

    @Post('newEvent')
    async getDataForEventCreation(
        @Body() body:Partial<IDataNecessaryToSheduleEvent>,
        isTest:boolean = false,
        @Request() req?:CustomRequest,
    ){
        try {
          const sendDataForCreationEventFromService = await this.service.executeEventCreationInMemoryAndInDB({
            dataOfEvent:body.dataOfEvent,
            descriptionAboutEvent:body?.descriptionAboutEvent,
            hourOfEvent:body.hourOfEvent,
            producerId:body?.producerId || req?.producerId,
            titleEvent:body.titleEvent,
          }, isTest);
          return sendDataForCreationEventFromService;
        } catch (error) {
            return error;
        };
    };
};
