import { Controller, Get, Query } from "@nestjs/common";
import { ReturnAllEventsService } from "./AllEvents.service";
import { ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { SchedulingEventOutput, SchedulingEventPagination } from "./AllEvents.dto";
import { SchedulingEvent } from "@prisma/client";
import { returnEvents } from "src/repositories/anyone/implementations/ReturnAllEvents.service";
@ApiTags("Anyone")
@Controller('all')
export class ReturnAllEventsController {
    constructor(
        private service:ReturnAllEventsService,
    ){};

    @Get('events')
    @ApiQuery({ type:SchedulingEventPagination, })
    @ApiResponse({ status:200, type:SchedulingEventOutput, })
    async returnEventsFiltred(
        isTest:boolean = false,
        @Query() query?:SchedulingEventPagination,
        ): Promise<returnEvents | SchedulingEvent[]>{
        try {
          const returnAllEventsFiltred = await this.service.allEventsAndChangeStateEvent(isTest, query); 
          return returnAllEventsFiltred as returnEvents;
        } catch (error) {
            return error;
        };
    };
};
