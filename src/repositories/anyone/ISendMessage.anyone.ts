import { MessagesForRoom, RoomForTicket } from "@prisma/client";
import { ISendAndGetMessagesDTO } from "src/useCases/anyone/sendMessageAndGetMessagesByRoom/SendAndGetMessages.DTO";

export abstract class ASendMessage {
    abstract sendMessage(data:ISendAndGetMessagesDTO): Promise<void> | MessagesForRoom[];
    abstract getMessages(roomId:string): Promise<RoomForTicket> | MessagesForRoom[];
};
