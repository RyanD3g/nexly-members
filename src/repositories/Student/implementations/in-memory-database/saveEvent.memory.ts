import { Injectable } from "@nestjs/common";
import { ACreateItemCalendar } from "../../ICalendarCreateEvent.student";
import { CalendarForStudents, SchedulingEvent } from "@prisma/client";
import { IAddItemCalendarDTO } from "src/useCases/students/addItemInMyCalendar/addItem.DTO";

@Injectable()
export class SaveEventInMemory implements ACreateItemCalendar {
    private eventsModel:Partial<SchedulingEvent>[] = [{
        id:'123',
        isHappened:false,
        dataOfEvent:'23/11/23',
        titleEvent:'Aula de trafego pago ao vivo',
        hourOfEvent:'13 - 22',
        descriptionAboutEvent:'Teste de descrição',
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
        producerId:'324',
        createdAt:new Date(),
        updatedAt:new Date(),
    }
];
    private caledarModel:CalendarForStudents[] = [];

    eventExists(eventId: string): boolean | Promise<SchedulingEvent> {
       const eventIsExistsOrNo = this.eventsModel.some(e => e.id === eventId);
       if(eventIsExistsOrNo){
           const filterOfEvent = this.eventsModel.filter(e => e.id === eventId);
           if(!filterOfEvent[0].isHappened) throw new Error('Evento já passou!!');
       };
       return eventIsExistsOrNo;
    }
    createDataInCalendar(data: IAddItemCalendarDTO): Object | Promise<void | Object> {
        const addEventInCalendar = this.caledarModel.push({
            id:'123',
            studentId:data.studentId,
            createdAt:new Date(),
            updatedAt:new Date(),
        });
        const getEvent = this.eventsModel.filter(e => e.id === data.eventId);
        getEvent[0].calendarId = this.caledarModel[0].id;
        return { created:true, };
    };

};
