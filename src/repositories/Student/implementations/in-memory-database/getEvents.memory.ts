import { Injectable } from "@nestjs/common";
import { AGetMyEvents } from "../../IGetMyEvents.student";
import { SchedulingEvent, CalendarForStudents } from "@prisma/client";
import { IGetMyEvents } from "src/useCases/students/getMyEventsSaved/GetEvents.DTO";

@Injectable()
export class GetEventsInMemory implements AGetMyEvents {
    private eventModel:SchedulingEvent[] = [{
        id:'123',
        titleEvent:'Teste do título do evento',
        dataOfEvent:'12/07/2005',
        hourOfEvent:'13 - 19',
        descriptionAboutEvent:'Teste de descrição',
        isHappened:false,
        producerId:'2345',
        calendarId:'123',
        createdAt:new Date(),
        updatedAt:new Date(),
    },
    {
        id:'5678',
        titleEvent:'Teste do título do evento',
        dataOfEvent:'12/07/2024',
        hourOfEvent:'13 - 19',
        descriptionAboutEvent:'Teste de descrição',
        isHappened:false,
        producerId:'2345',
        calendarId:'123',
        createdAt:new Date(),
        updatedAt:new Date(),
    },
];
    private calendarModel:CalendarForStudents[] = [
        {
            id:'123',
            studentId:'211',
            createdAt:new Date(),
            updatedAt:new Date(),
        },
    ];  
    eventIsHappned(eventId: string): SchedulingEvent{
        const eventExists = this.eventModel.filter(e => e.id === eventId);
        if(eventExists.length <= 0) throw new Error('Evento inexistente!!');
        const eventIsHappnedOrNo = eventExists[0];
        return eventIsHappnedOrNo;
    };
    changePastEventState(eventId: string): void {
        const changeState = this.eventModel.filter(e => e.id === eventId);
        changeState[0].isHappened === false? changeState[0].isHappened = true : changeState[0].isHappened;
    };
    myEvents(data: IGetMyEvents): SchedulingEvent[]{
        const returnMyEvents = this.eventModel.filter(e => e.calendarId === data.calendarId);
        return returnMyEvents;
    };
};
