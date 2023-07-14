import { Injectable } from "@nestjs/common";
import { SendMessageAndGetMessagesInMemory } from "src/repositories/anyone/implementations/in-memory-database/sendAndGetMessages.memory";
import { SendMessageAndGetMessagesImplementation } from "src/repositories/anyone/implementations/sendAndGetMessages.service";
import { ISendAndGetMessagesDTO } from "./SendAndGetMessages.DTO";

@Injectable()
export class SendAndGetMessagesService {
    constructor(
        private implementation:SendMessageAndGetMessagesImplementation,
        private inMemory:SendMessageAndGetMessagesInMemory,
    ){};

    async sendMessages(data:ISendAndGetMessagesDTO, isTest:boolean){
        if(isTest){
            const send = this.inMemory.sendMessage(data);
            return send;
        };
        const send = await this.implementation.sendMessage(data);
        return send;
    };
};
