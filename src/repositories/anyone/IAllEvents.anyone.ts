import { SchedulingEvent } from "@prisma/client";

export abstract class AAllEvents {
    abstract eventIsPast(eventId:string): void | Promise<void>;
    abstract returnAllEventsNoPast(): SchedulingEvent[] | Promise<SchedulingEvent[]>;
};
