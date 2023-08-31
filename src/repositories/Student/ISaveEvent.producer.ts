import { IDataForSaveEvent } from "src/useCases/students/saveEventsScheduled/SaveEvents.DTO";

export abstract class AModelSaveEvent {
    abstract eventIsOld(eventId:string);
    abstract saveEvent(data:IDataForSaveEvent);
};
