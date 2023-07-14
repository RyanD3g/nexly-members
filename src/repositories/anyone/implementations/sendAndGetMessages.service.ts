import { Injectable } from "@nestjs/common";
import { ASendMessage } from "../ISendMessage.anyone";
import { RoomForTicket } from "@prisma/client";
import { ISendAndGetMessagesDTO } from "../../../useCases/anyone/sendMessageAndGetMessagesByRoom/SendAndGetMessages.DTO";
import { PrismaService } from "../../../database";

@Injectable()
export class SendMessageAndGetMessagesImplementation implements ASendMessage {
    constructor(
        private prisma:PrismaService,
    ){};
    async sendMessage(data: ISendAndGetMessagesDTO): Promise<void> {
        const createMessage = await this.prisma.roomForTicket.update({
            where:{ id:data.roomId, },

            data:{
                messages:{
                    create:{
                        userMessage:data.user,
                        contentMessage:data.contentMessage,
                    },
                },
            },
        });
    };
    async getMessages(roomId: string): Promise<RoomForTicket> {
        const allMessagesByRoom = await this.prisma.roomForTicket.findUnique({
            where:{ id:roomId, },
            include:{ messages:true, },
        });

        return allMessagesByRoom;
    };
};
