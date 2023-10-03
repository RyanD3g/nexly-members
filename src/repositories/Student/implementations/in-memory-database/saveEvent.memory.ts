import { Injectable } from "@nestjs/common";
import { ACreateItemCalendar } from "../../ICalendarCreateEvent.student";
import { CalendarForStudents, SchedulingEvent } from "@prisma/client";
import { IAddItemCalendarDTO } from "src/useCases/students/addItemInMyCalendar/addItem.DTO";

@Injectable()
export class SaveEventInMemory implements ACreateItemCalendar {
    private eventsModel:SchedulingEvent[] = [{
        id:'123',
        isHappened:false,
        dataOfEvent:'23/11/23',
        titleEvent:'Aula de trafego pago ao vivo',
        hourOfEvent:'13 - 22',
        descriptionAboutEvent:'Teste de descrição',
        calendarId:'123',
        producerId:'324',
        createdAt:new Date(),
        updatedAt:new Date(),
    },
    {
        id:'321',
        isHappened:false,
        dataOfEvent:'23/03/23',
        titleEvent:'Aula de typescript ao vivo',
        hourOfEvent:'13 - 22',
        descriptionAboutEvent:'Teste de descrição 2',
        calendarId:'123',
        producerId:'324',
        createdAt:new Date(),
        updatedAt:new Date(),
    }
];
    private caledarModel:CalendarForStudents[] = [];

    eventExists(eventId: string): boolean | Promise<SchedulingEvent> {
        throw new Error("Method not implemented.");
    }
    createDataInCalendar(data: IAddItemCalendarDTO): void | Promise<void | Object> {
        throw new Error("Method not implemented.");
    }

};
