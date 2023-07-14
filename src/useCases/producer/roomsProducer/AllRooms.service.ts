import { Injectable } from "@nestjs/common";
import { AllRoomsByProducerImplementation } from "src/repositories/Producer/implementations/AllRoomsByProducer.service";
import { IAllRoomsDTO } from "./AllRooms.DTO";

@Injectable()
export class AllRoomsByProducerService {
    constructor(
        private implementation:AllRoomsByProducerImplementation,
    ){};
    async returnAllRooms(data:IAllRoomsDTO){
        const all = await this.implementation.myRooms(data);
        return all;
    };
};
