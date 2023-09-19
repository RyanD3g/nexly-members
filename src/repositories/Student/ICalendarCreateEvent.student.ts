import { IAddItemCalendarDTO } from "src/useCases/students/addItemInMyCalendar/addItem.DTO";

export abstract class ACreateItemCalendar {
    abstract createDataInCalendar(data:IAddItemCalendarDTO): Promise<void> | void;
};
