import { Injectable } from "@nestjs/common";
import { CreateEventOnCalendarImplementation } from "src/repositories/Producer/implementations/CreateEventOnCalendar.service";
import { CreateEventOnCalendarInMemory } from "src/repositories/Producer/implementations/in-memory-database/createEventOnCalendar.memory";
import { IDataNecessaryToSheduleEvent } from "./CreateEvent.DTO";
import { UserIdContext, dataForStorage } from "src/contexts/userId.context";
import { AsyncLocalStorage } from "async_hooks";

@Injectable()
export class CreateEventSheduledService {
    constructor(
        private implementation:CreateEventOnCalendarImplementation,
        private inMemory:CreateEventOnCalendarInMemory,
        private context:AsyncLocalStorage<dataForStorage>,
    ){};

    async executeEventCreationInMemoryAndInDB(data:IDataNecessaryToSheduleEvent, isTest:boolean){
        if(!data.producerId){
            data.producerId = this.context.getStore()["producer"];
        };
        if(isTest){
            const createEventInMemory = this.inMemory.createEventOnCalendar(data);
            return createEventInMemory;
        };
        const createEventInDB = await this.implementation.createEventOnCalendar(data);
        return createEventInDB;
    };
};
