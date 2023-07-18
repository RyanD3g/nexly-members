import { Producer } from "@prisma/client";
import { IAllRoomsDTO } from "src/useCases/producer/roomsProducer/AllRooms.DTO";

export abstract class ARoomByProducer {
    abstract myRooms(data:T): Promise<T>;
};
