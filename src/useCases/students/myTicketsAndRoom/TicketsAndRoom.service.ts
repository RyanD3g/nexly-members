import { Injectable } from "@nestjs/common";
import { TicketsAndRoomImplementation } from "../../../repositories/Student/implementations/TicketsAndRoom.service";
import { TicketsAndRoomInMemory } from "../../../repositories/Student/implementations/in-memory-database/ticketsAndRoom.memory";
import { ITicketsDTO } from "./TicketsAndRoom.DTO";

@Injectable()
export class TicketsAndRoomService {
    constructor(
        private implementation:TicketsAndRoomImplementation,
        private inMemory:TicketsAndRoomInMemory,
    ){};

    async myData(data:ITicketsDTO, isTest:boolean){
        if(isTest){
            const allData = this.inMemory.myTickets(data);
            return allData;
        };
        const allData = this.implementation.myTickets(data);
        return allData;
    };
};
