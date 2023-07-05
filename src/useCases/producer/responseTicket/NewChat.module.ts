import { Module } from "@nestjs/common";
import { NewChatGateway } from "./NewChat.gateway";

@Module({
    providers: [NewChatGateway],
})
export class NewChatModule {};
