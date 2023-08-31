import { Injectable } from "@nestjs/common";
import { ASendMessage } from "../../ISendMessage.anyone";
import { MessagesForRoom, RoomForTicket } from "@prisma/client";
import { ISendAndGetMessagesDTO } from "../../../../useCases/anyone/sendMessageAndGetMessagesByRoom/SendAndGetMessages.DTO";

@Injectable()
export class SendMessageAndGetMessagesInMemory implements ASendMessage {
    private RoomsMessagesModel: RoomForTicket[] = [
        {
            id:'123',
            nameRoom:'Teste de nome',
            producerId:'478',
            ticketId:'679',
            createdAt:new Date(),
            updatedAt:new Date(),
        },
    ];
    private MessagesModel: MessagesForRoom[] = [];
    sendMessage(data: ISendAndGetMessagesDTO): MessagesForRoom[] {
        const createMessage = this.MessagesModel.push({
            id:'267',
            contentMessage:data.contentMessage,
            roomForTicketId:data.roomId,
            userMessage:data.user,
            createdAt:new Date(),
            updatedAt:new Date(),
            ticketSuport_StudentId:'',
        });
        return this.MessagesModel;
    };
    getMessages(roomId: string): MessagesForRoom[] {
        return this.MessagesModel;
    };
};
