import { Injectable } from "@nestjs/common";
import { ReturnTicketImplementation } from "../../../repositories/anyone/implementations/ReturnTickets.service";
import { ReturnTicketInMemory } from "../../../repositories/anyone/implementations/in-memory-database/ReturnTicket.memory";

@Injectable()
export class ReturnTicketsService {
    constructor(
        private inMemory:ReturnTicketInMemory,
        private implementation:ReturnTicketImplementation,
    ){};

    async viewTickets(isTest:boolean){
        if(isTest){
            return this.inMemory.allTickets();
        };
        return await this.implementation.allTickets();
    };
};
