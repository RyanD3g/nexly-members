import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { NewChatGateway } from "./NewChat.gateway";
import { NewChatController } from "./NewChat.controller";
import { ResponseTicketService } from "./CreateRoom.service";
import { ResponseTicketImplementation } from "src/repositories/Producer/implementations/ResponseTicket.service";
import { PrismaService } from "src/database";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { isSigned } from "src/middlewares/isSigned.middleware";
import { IsProducer } from "src/middlewares/isProducer.middleware";
// import { CacheImplementation } from "src/providers/implementations/Redis.service";
import { UserIdContext } from "src/contexts/userId.context";
import { AsyncLocalStorage } from "async_hooks";

@Module({
    controllers:[NewChatController],
    providers: [
        PrismaService,
        NewChatGateway,
        ResponseTicketService,
        ResponseTicketImplementation,
        // CacheImplementation,
        IsJwtMiddleware, 
        isSigned,
        IsProducer,
    ],
})
export class NewChatModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware, isSigned, IsProducer)
                .forRoutes('create/room');
    };
};
