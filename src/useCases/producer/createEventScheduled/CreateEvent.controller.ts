import { Body, Controller, Post } from "@nestjs/common";
import { CreateEventSheduledService } from "./CreateEvent.service";
import { IDataNecessaryToSheduleEvent } from "./CreateEvent.DTO";

@Controller('create')
export class CreateNewEventOnCalendarController {
    constructor(
        private service:CreateEventSheduledService,
    ){};

    @Post('newEvent')
    async getDataForEventCreation(
        @Body() body:Partial<IDataNecessaryToSheduleEvent>,
        isTest:boolean = false,
    ){
        try {
          const sendDataForCreationEventFromService = await this.service.executeEventCreationInMemoryAndInDB({
            dataOfEvent:body.dataOfEvent,
            descriptionAboutEvent:body?.descriptionAboutEvent,
            hourOfEvent:body.hourOfEvent,
            producerId:body?.producerId,
            titleEvent:body.titleEvent,
          }, isTest);
          return sendDataForCreationEventFromService;
        } catch (error) {
            return error;
        };
    };
};
