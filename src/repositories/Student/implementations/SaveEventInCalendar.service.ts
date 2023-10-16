import { HttpException, Injectable } from "@nestjs/common";
import { AModelSaveEvent } from "../ISaveEvent.producer";
import { IDataForSaveEvent } from "src/useCases/students/saveEventsScheduled/SaveEvents.DTO";
import { PrismaService } from "src/database";
import { ACreateItemCalendar } from "../ICalendarCreateEvent.student";
import { SchedulingEvent } from "@prisma/client";
import { IAddItemCalendarDTO } from "src/useCases/students/addItemInMyCalendar/addItem.DTO";

@Injectable()
export class SaveEventImplementation implements ACreateItemCalendar {
    constructor(
        private prisma:PrismaService,
    ){};
    async eventExists(eventId: string): Promise<SchedulingEvent> {
        const eventExists = await this.prisma.schedulingEvent.findUnique({
            where:{ id:eventId, },
        });
        if(eventExists){
            if(eventExists.isHappened) throw new HttpException('Evento passado!!', 400);
        };
        return eventExists;
    };
    async createDataInCalendar(data: IAddItemCalendarDTO): Promise<void | Object> {
        const eventForAdd = await this.prisma.schedulingEvent.findUnique({
            where:{ id:data.eventId },
        });
        const studentAssociate = await this.prisma.student.findUnique({
            where:{ id:data.studentId, },
        });
        const addItemInCalendar = await this.prisma.calendarForStudents.create({
            data:{
                Student:{
                    connect:studentAssociate,
                },
                Event:{
                    connect: eventForAdd,
                },
            },
        });

        return { added:true };
    };
}