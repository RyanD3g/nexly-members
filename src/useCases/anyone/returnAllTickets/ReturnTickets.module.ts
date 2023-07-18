import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { ReturnTicketsController } from "./ReturnTickets.controller";
import { PrismaService } from "src/database";
import { ReturnTicketImplementation } from "src/repositories/anyone/implementations/ReturnTickets.service";
import { ReturnTicketInMemory } from "src/repositories/anyone/implementations/in-memory-database/ReturnTicket.memory";
import { ReturnTicketsService } from "./ReturnTickets.service";

@Module({
    controllers:[ReturnTicketsController],
    providers:[
        PrismaService,
        ReturnTicketImplementation,
        ReturnTicketInMemory,
        ReturnTicketsService,
        IsJwtMiddleware,
    ],
})
export class ReturnTicketModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
                .forRoutes('all/tickets');
    };
};
