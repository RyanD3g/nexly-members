import { SchedulingEvent } from "@prisma/client";
import { IAddItemCalendarDTO } from "src/useCases/students/addItemInMyCalendar/addItem.DTO";

export abstract class ACreateItemCalendar {
    abstract eventExists(eventId:string): Promise<SchedulingEvent> | boolean;
    abstract createDataInCalendar(data:IAddItemCalendarDTO): Promise<void | Object> | void;
};
