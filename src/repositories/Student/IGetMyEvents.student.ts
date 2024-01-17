import { CalendarForStudents, SchedulingEvent } from '@prisma/client';
import { IGetMyEvents } from 'src/useCases/students/getMyEventsSaved/GetEvents.DTO';
export abstract class AGetMyEvents {
    abstract eventIsHappned(eventId:string): SchedulingEvent | Promise<SchedulingEvent> | void;
    abstract changePastEventState(eventId:string): void | Promise<void>;
    abstract myEvents(data:IGetMyEvents): SchedulingEvent[] | Promise<SchedulingEvent[]> | void;
};
 