import { Controller, Get } from "@nestjs/common";
import { ReturnAllEventsService } from "./AllEvents.service";

@Controller('all')
export class ReturnAllEventsController {
    constructor(
        private service:ReturnAllEventsService,
    ){};

    @Get('events')
    async returnEventsFiltred(isTest:boolean = false){
        try {
          const returnAllEventsFiltred = await this.service.allEventsAndChangeStateEvent(isTest); 
          return returnAllEventsFiltred;
        } catch (error) {
            return error;
        };
    };
};
