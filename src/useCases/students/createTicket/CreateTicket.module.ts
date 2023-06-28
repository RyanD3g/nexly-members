import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { CreateTicketController } from "./CreateTicket.controller";
import { PrismaService } from "src/database";
import { CreateTicketImplementation } from "src/repositories/Student/implementations/CreateTicket.service";
import { CreateTicketInMemory } from "src/repositories/Student/implementations/in-memory-database/createTicket.memory";
import { CreateTicketService } from "./CreateTicket.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";

@Module({
    imports: [],
    controllers: [CreateTicketController],
    providers: [
        PrismaService,
        CreateTicketImplementation,
        CreateTicketInMemory,
        CreateTicketService,
        IsJwtMiddleware,
    ],
})
export class CreateTicketModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
                .forRoutes('create/ticket');
    };
};
