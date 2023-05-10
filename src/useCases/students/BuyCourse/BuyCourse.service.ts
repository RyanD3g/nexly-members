import { Injectable } from "@nestjs/common";
import { BuyCourseImplementation } from "../../../repositories/Student/implementations/BuyCourse.service";
import { IBuyCourse } from "./BuyCourse.DTO";
import { BuyCourseInMemory } from "../../../repositories/Student/implementations/in-memory-database/buyCourse.memory";

@Injectable()
export class BuyCourseService {
    constructor(
        private implementation:BuyCourseImplementation,
        private inMemory:BuyCourseInMemory,
    ){};
    async buyCourse(data:IBuyCourse, isTest:boolean){
        if(!isTest){
            const buyed = await this.implementation.buy(data);
            return buyed;
        };
        const buyedInMemory = await this.inMemory.buy(data);
        return buyedInMemory;
    };
};
