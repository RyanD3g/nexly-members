import { Injectable } from "@nestjs/common";
import { ReturnAllDataImplementation } from "src/repositories/anyone/implementations/ReturnPostsAndPolls.service";

@Injectable()
export class AllPostsAndPolls {
    constructor(
        private implementation:ReturnAllDataImplementation,
    ){};
    async execute(){
        return await this.implementation.returnAll();
    };
};
