import { HttpException, Injectable } from "@nestjs/common";
import { AGetMyEvents } from "../IGetMyEvents.student";
import { SchedulingEvent } from "@prisma/client";
import { IGetMyEvents } from "src/useCases/students/getMyEventsSaved/GetEvents.DTO";
import { PrismaService } from "src/database";

@Injectable()
export class GetEventsImplementation implements AGetMyEvents {
    constructor(
        private prisma:PrismaService,
    ){};
    async eventIsHappned(eventId: string): Promise<SchedulingEvent> {
        const eventExists = await this.prisma.schedulingEvent.findUnique({
            where:{ id:eventId, },
        });
        if(!eventExists) throw new HttpException(`Evento inexistente: ${eventExists.titleEvent}`, 404);
        return eventExists;
    }
    async changePastEventState(eventId: string): Promise<void> {
        const changeStateEvent = await this.prisma.schedulingEvent.update({
            where:{ id:eventId, },
            data:{
                isHappened:false,
            },
        });
    }
    async myEvents({ studentId }: IGetMyEvents): Promise<SchedulingEvent[]> {
        const myAllEventsInCalendar = await this.prisma.student.findUnique({
            where:{ id:studentId, },
            include:{ Calendar:{ include:{ Event:true, }, }, },
        });
        return myAllEventsInCalendar.Calendar[0].Event;
    };
};
