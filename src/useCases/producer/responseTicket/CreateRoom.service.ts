import { Injectable } from "@nestjs/common";
import { ResponseTicketImplementation } from "src/repositories/Producer/implementations/ResponseTicket.service";
import { IResponseTicketDTO } from "./NewChat.DTO";

@Injectable()
export class ResponseTicketService{
    constructor(
        private implementation:ResponseTicketImplementation,
    ){};

    async createRoomByTicket(data:IResponseTicketDTO){
        const created = await this.implementation.createNewRoom(data);
        return created;
    };
};
