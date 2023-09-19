import { Injectable } from "@nestjs/common";
import { AModelSchedulingEvent } from "../../ICreateSchedulingEvent.producer";
import { IDataNecessaryToSheduleEvent } from "src/useCases/producer/createEventScheduled/CreateEvent.DTO";
import { SchedulingEvent } from "@prisma/client";

@Injectable()
export class CreateEventOnCalendarInMemory implements AModelSchedulingEvent {
    private ModelExampleScheduligEvent:SchedulingEvent[] = [];
    createEventOnCalendar(data: IDataNecessaryToSheduleEvent) {
        const createEvent = this.ModelExampleScheduligEvent.push(
            {
                id:'123',
                dataOfEvent:data.dataOfEvent,
                hourOfEvent:data.hourOfEvent,
                titleEvent:data.titleEvent,
                descriptionAboutEvent:data?.descriptionAboutEvent,
                isHappened:null,
                producerId:data.producerId,
                createdAt:new Date(),
                updatedAt:new Date(),
            },
        );
        return this.ModelExampleScheduligEvent;
    };
};
