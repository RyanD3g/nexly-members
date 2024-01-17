import { Injectable } from "@nestjs/common";
import { GetEventsImplementation } from "src/repositories/Student/implementations/GetMyEventsInCalendar.service";
import { GetEventsInMemory } from "src/repositories/Student/implementations/in-memory-database/getEvents.memory";
import { IGetMyEvents } from "./GetEvents.DTO";
import * as dayjs from 'dayjs';

@Injectable()
export class GetEventsService {
    constructor(
        private inMemory:GetEventsInMemory,
        private implementation:GetEventsImplementation,
    ){};
    async allEvents(data:IGetMyEvents, isTest:boolean){
        if(isTest){
            const allEventsStudents = this.inMemory.myEvents(data);
            allEventsStudents.map(e=>{
                const eventIsHappnedAndExists = this.inMemory.eventIsHappned(e.id);
                if(dayjs(dayjs().format('YYYY-MM-DD')).diff(eventIsHappnedAndExists.dataOfEvent, 'day')>=1){
                    const changeDate = this.inMemory.changePastEventState(eventIsHappnedAndExists.id);
                };
            });
            return allEventsStudents;
        };
        const allEventsStudents = await this.implementation.myEvents(data);
        allEventsStudents.map(async e=>{
            const eventIsHappnedAndExists = await this.implementation.eventIsHappned(e.id);
            if(dayjs(dayjs().format('YYYY-MM-DD')).diff(eventIsHappnedAndExists.dataOfEvent, 'day')>=1){
                const changeDate = await this.implementation.changePastEventState(eventIsHappnedAndExists.id);
            };
        });
        return allEventsStudents;
    };
};
