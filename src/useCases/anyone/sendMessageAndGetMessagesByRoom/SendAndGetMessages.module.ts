import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { sendAndGetMessagesController } from "./SendAndGetMessages.controller";
import { PrismaService } from "src/database";
import { SendMessageAndGetMessagesImplementation } from "src/repositories/anyone/implementations/sendAndGetMessages.service";
import { SendMessageAndGetMessagesInMemory } from "src/repositories/anyone/implementations/in-memory-database/sendAndGetMessages.memory";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { SendAndGetMessagesService } from "./SendAndGetMessages.service";

@Module({
    controllers: [sendAndGetMessagesController],
    providers: [
        PrismaService,
        SendMessageAndGetMessagesImplementation,
        SendMessageAndGetMessagesInMemory,
        SendAndGetMessagesService,
        IsJwtMiddleware,
    ],
})
export class SendAndGetMessagesModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
                .forRoutes('message/send', 'message/all');
    };
};
