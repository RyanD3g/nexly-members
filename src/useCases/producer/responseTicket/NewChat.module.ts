import { Module } from "@nestjs/common";
import { NewChatGateway } from "./NewChat.gateway";
import { NewChatController } from "./NewChat.controller";
import { ResponseTicketService } from "./CreateRoom.service";
import { ResponseTicketImplementation } from "src/repositories/Producer/implementations/ResponseTicket.service";
import { PrismaService } from "src/database";

@Module({
    // controllers:[NewChatController],
    providers: [
        // PrismaService,
        NewChatGateway,
        // ResponseTicketService,
        // ResponseTicketImplementation,
    ],
})
export class NewChatModule {};
