import { SchedulingEvent } from "@prisma/client";
import { SchedulingEventPagination } from "src/useCases/anyone/allEvents/AllEvents.dto";
import { returnEvents } from "./implementations/ReturnAllEvents.service";

export abstract class AAllEvents {
    abstract eventIsPast(eventId:string): void | Promise<void>;
    abstract returnAllEventsNoPast(querys:SchedulingEventPagination): SchedulingEvent[] | returnEvents | Promise<returnEvents>;
};
