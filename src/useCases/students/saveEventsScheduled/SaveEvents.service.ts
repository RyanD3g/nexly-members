import { HttpException, Injectable } from "@nestjs/common";
import { SaveEventImplementation } from "src/repositories/Student/implementations/SaveEventInCalendar.service";
import { SaveEventInMemory } from "src/repositories/Student/implementations/in-memory-database/saveEvent.memory";
import { IAddItemCalendarDTO } from "../addItemInMyCalendar/addItem.DTO";

@Injectable()
export class SaveEventInCalendarService {
    constructor(
        private implementation:SaveEventImplementation,
        private inMemory:SaveEventInMemory,
    ){};

    async executeCreation(data:IAddItemCalendarDTO, isTest:boolean){
        if(isTest){
            const verifyIfIsExisting = this.inMemory.eventExists(data.eventId);
            if(!verifyIfIsExisting){
                throw new Error('Evento inexistente!!');
            };
            const sendDataForSaveEvent = this.inMemory.createDataInCalendar(data);
            return sendDataForSaveEvent;
        };
        const verifyIfIsExisting = await this.implementation.eventExists(data.eventId);
        if(!verifyIfIsExisting){
            throw new HttpException('Evento inexistente!!', 404);
        };
        const sendDataForSaveEvent = await this.implementation.createDataInCalendar(data);
        return sendDataForSaveEvent;
    };
};
