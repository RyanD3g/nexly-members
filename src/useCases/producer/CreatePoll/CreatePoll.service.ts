import { Injectable } from "@nestjs/common";
import { CreatePollAndOptionImplementation } from "src/repositories/Producer/implementations/CreateNewPoll.service";
import { CreatePollAndAddOneQuestionOptionalInMemory } from "src/repositories/Producer/implementations/in-memory-database/createPoll.memory";
import { ICreatePollDTO, IOptionsForPollDTO } from "./CreatePoll.DTO";

@Injectable()
export class CreateNewPollOrAddNewOptionForPoll {
    constructor(
        private inMemory:CreatePollAndAddOneQuestionOptionalInMemory,
        private implementation:CreatePollAndOptionImplementation,
    ){};

    async createNewPoll(data:ICreatePollDTO, isTest:boolean){
        if(isTest){
            const newPoll = this.inMemory.createAPollAndOption(data);
            return newPoll;
        };
        const newPoll = await this.implementation.createAPollAndOption(data);
        return newPoll;
    };
    async createNewOption(data:IOptionsForPollDTO, isTest:boolean){
        if(isTest){
            const newPoll = this.inMemory.addNewOptionPoll(data);
            return newPoll;
        };
        const newPoll = await this.implementation.addNewOptionPoll(data);
        return newPoll;
    };
};
