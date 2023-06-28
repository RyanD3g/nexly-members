import { Injectable } from "@nestjs/common";
import { CreateTicketImplementation } from "../../../repositories/Student/implementations/CreateTicket.service";
import { CreateTicketInMemory } from "../../../repositories/Student/implementations/in-memory-database/createTicket.memory";
import { ICreateTicketDTO } from "./CreateTicket.DTO";

@Injectable()
export class CreateTicketService {
    constructor(
       private inMemory:CreateTicketInMemory,
       private implementation:CreateTicketImplementation,
    ){};
    async createTicketForSuport(data:ICreateTicketDTO, isTest:boolean){
        if(isTest){
            const createTicket = await this.inMemory.createTicket(data);
            return createTicket;
        };
        const createTicket = await this.implementation.createTicket(data);
        return createTicket;
    };
};
