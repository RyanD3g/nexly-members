import { Injectable } from "@nestjs/common";
import { ReturnAllEventsImplementation } from "src/repositories/anyone/implementations/ReturnAllEvents.service";
import { ReturnAllEventsInMemory } from "src/repositories/anyone/implementations/in-memory-database/ReturnAllEvents.memory";
import * as dayjs from 'dayjs';
import { SchedulingEventPagination } from "./AllEvents.dto";

@Injectable()
export class ReturnAllEventsService {
    constructor(
        private inMemory:ReturnAllEventsInMemory,
        private implementation:ReturnAllEventsImplementation,
    ){};
    async allEventsAndChangeStateEvent(isTest:boolean, querys:SchedulingEventPagination){
        if(isTest){
            const allEventsReturned = this.inMemory.returnAllEventsNoPast();
            allEventsReturned.map(e =>{
                if(dayjs(dayjs().format('YYYY-MM-DD')).diff(e.dataOfEvent, 'day')>=1){
                    const changePastEventStateForHappned = this.inMemory.eventIsPast(e.id);
                };
            });
            return allEventsReturned;
        };
        const allEventsReturned = await this.implementation.returnAllEventsNoPast(querys);
        allEventsReturned.allPosts.map(async e =>{
            if(dayjs(dayjs().format('YYYY-MM-DD')).diff(e.dataOfEvent, 'day')>=1){
                const changePastEventStateForHappned = await this.implementation.eventIsPast(e.id);
            };
        });
        return allEventsReturned;
    };
};
