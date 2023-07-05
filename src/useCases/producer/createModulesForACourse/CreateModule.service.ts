import { Injectable } from "@nestjs/common";
import { CreateModuleImplementation } from "../../../repositories/Producer/implementations/CreateModule.service";
import { CreateModuleInMemory } from "../../../repositories/Producer/implementations/in-memory-database/createModule.memory";
import { ICreateModuleDTO } from "./CreateModule.DTO";

@Injectable()
export class CreateModuleService {
    constructor(
        private implementation:CreateModuleImplementation,
        private inMemory:CreateModuleInMemory,
    ){};
    async createModuleBasedInCourse(data:ICreateModuleDTO, isTest:boolean){
        if(!isTest){
            const createdInDb = await this.implementation.createModule(data);
            return createdInDb;
        };
        const createdInMemory = await this.inMemory.createModule(data);
        return createdInMemory;
    };
};
