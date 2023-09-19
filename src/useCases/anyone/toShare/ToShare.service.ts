import { HttpException, Injectable } from "@nestjs/common";
import { ToShareImplementation } from "../../../repositories/anyone/implementations/ToShare.service";
import { ToShareInMemory } from "../../../repositories/anyone/implementations/in-memory-database/toShare.memory";
import { IToShareDTO } from "./ToShare.DTO";

@Injectable()
export class ToSharePostService {
    constructor(
        private inMemory:ToShareInMemory,
        private implementation:ToShareImplementation,
    ){};

    async execute(data:IToShareDTO, isTest:boolean, isStudent?:boolean){
        if(isTest){
            const send = this.inMemory.sharePost(data);
            if(!send){
                throw new Error('Post inexistente');
            };
            return send;
        };
        const send = this.implementation.sharePost(data, isStudent);
        if(!send){
            throw new HttpException('Post inexistente', 404);
        };
        return send;
    };
};
