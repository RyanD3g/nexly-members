import { HttpException, Injectable } from "@nestjs/common";
import { ExchangeVoteImplementation } from "src/repositories/anyone/implementations/ExchangeVote.service";
import { ExchangeVoteInMemory } from "src/repositories/anyone/implementations/in-memory-database/exchangeVote.memory";
import { IExchangeDTO } from "./Exchange.DTO";

@Injectable()
export class ExchangeVoteService {
    constructor(
        private inMemory:ExchangeVoteInMemory,
        private implementation:ExchangeVoteImplementation,
    ){};

    async executeExchange(data:IExchangeDTO, isTest:boolean){
        if(isTest){
            const oldOptionExists = this.inMemory.optionOldExists(data.oldOptionId);
            if(!oldOptionExists){
                throw new Error("Opção inexistente!!");
            };
            const newOptionExists = this.inMemory.newOptionExists(data.oldOptionId);
            if(!newOptionExists){
                throw new Error("Opção inexistente!!");
            };
            const exchange = this.inMemory.exchangeVote(data);
            return exchange;
        };
        const oldOptionExists = await this.implementation.optionOldExists(data.oldOptionId);
        if(!oldOptionExists){
            throw new HttpException("Opção inexistente!!", 404);
        };
        const newOptionExists = await this.implementation.newOptionExists(data.oldOptionId);
        if(!newOptionExists){
            throw new HttpException("Opção inexistente!!", 404);
        };
        const exchange = await this.implementation.exchangeVote(data);
        return exchange;
    };
};
