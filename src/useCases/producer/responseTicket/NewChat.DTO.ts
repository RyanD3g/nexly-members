import { IsNotEmpty } from "class-validator";

export class IResponseTicketDTO {
    @IsNotEmpty()
    nameRoom:string;
    
    ticketId:string;
    producerId:string;
};
