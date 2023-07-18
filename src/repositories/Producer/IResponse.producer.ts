import { RoomForTicket, TicketSuport_Student } from "@prisma/client";
import { IResponseTicketDTO } from "src/useCases/producer/responseTicket/NewChat.DTO";

export abstract class AResponseTicket {
    abstract createNewRoom(data:IResponseTicketDTO): Promise<RoomForTicket[]> | RoomForTicket[];
};
