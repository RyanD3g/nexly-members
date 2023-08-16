import { HttpException, Injectable } from "@nestjs/common";
import { VoteInPollImplementation } from "src/repositories/anyone/implementations/VoteInPoll.service";
import { VoteInPollInMemory } from "src/repositories/anyone/implementations/in-memory-database/voteInPoll.memory";
import { IVoteInPollDTO } from "./Vote.DTO";
import { AsyncLocalStorage } from "async_hooks";
import { dataForStorage } from "src/contexts/userId.context";

@Injectable()
export class VoteInPollService {
    constructor(
        private inMemory:VoteInPollInMemory,
        private implementation:VoteInPollImplementation,
        private readonly context:AsyncLocalStorage<dataForStorage>,
    ){};

    async execute_vote(data:IVoteInPollDTO, isTest:boolean){
        if(!data.idUser){
            data.idUser = !this.context.getStore()["producer"]? this.context.getStore()["student"]:this.context.getStore()["producer"];
        };
        if(isTest){
            const optionIsExists = this.inMemory.optionExists(data.optionId);
            if(!optionIsExists){
                throw new Error('Opção inexistente!!');
            };
            const iVoted = this.inMemory.isVoted(data);
            if(iVoted){
                throw new Error('Voto anteriormente anotado!!');
            };
            const executeVote = this.inMemory.toVote(data);
            return executeVote;
        };

        const optionIsExists = await this.implementation.optionExists(data.optionId);
            if(!optionIsExists){
                throw new HttpException('Opção inexistente!!', 404);
            };
            const iVoted = await this.implementation.isVoted(data);
            if(iVoted){
                throw new HttpException('Voto anteriormente anotado!!', 400);
            }; 
            const executeVote = await this.implementation.toVote(data);
            return executeVote;
    };
};
