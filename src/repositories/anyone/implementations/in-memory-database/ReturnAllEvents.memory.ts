import { Injectable } from "@nestjs/common";
import { AAllEvents } from "../../IAllEvents.anyone";
import { SchedulingEvent } from "@prisma/client";

@Injectable()
export class ReturnAllEventsInMemory implements AAllEvents {
    private EventsModel:SchedulingEvent[] = [
        {
            id:'123',
            titleEvent:'Teste do título do evento',
            dataOfEvent:'2024-07-12',
            hourOfEvent:'13 - 19',
            descriptionAboutEvent:'Teste de descrição',
            isHappened:false,
            producerId:'2345',
            calendarId:'123',
            createdAt:new Date(),
            updatedAt:new Date(),
        },
        {
            id:'456',
            titleEvent:'Teste do título do evento',
            dataOfEvent:'2005-12-07',
            hourOfEvent:'13 - 19',
            descriptionAboutEvent:'Teste de descrição',
            isHappened:false,
            producerId:'2345',
            calendarId:'123',
            createdAt:new Date(),
            updatedAt:new Date(),
        },
        {
            id:'756',
            titleEvent:'Teste do título do evento',
            dataOfEvent:'2015-07-12',
            hourOfEvent:'13 - 19',
            descriptionAboutEvent:'Teste de descrição',
            isHappened:true,
            producerId:'2345',
            calendarId:'123',
            createdAt:new Date(),
            updatedAt:new Date(),
        },
    ];
    eventIsPast(eventId: string): void {
        const changeStateEvent = this.EventsModel.filter(e => e.id === eventId);
        const indexedIfExists = this.EventsModel.indexOf(changeStateEvent[0]);
        this.EventsModel[indexedIfExists].isHappened = true;
    };
    returnAllEventsNoPast(): SchedulingEvent[] {
        const dataFiltredForEventsNotHappened = this.EventsModel.filter(e => e.isHappened !== true);        
        return dataFiltredForEventsNotHappened;
    };
};
