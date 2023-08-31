import { IDataNecessaryToSheduleEvent } from "src/useCases/producer/createEventScheduled/CreateEvent.DTO";

export abstract class AModelSchedulingEvent {
    abstract createEventOnCalendar(data:IDataNecessaryToSheduleEvent);
};
