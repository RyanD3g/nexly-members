import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ReturnAllEventsController } from "./AllEvents.controller";
import { PrismaService } from "src/database";
import { ReturnAllEventsImplementation } from "src/repositories/anyone/implementations/ReturnAllEvents.service";
import { ReturnAllEventsInMemory } from "src/repositories/anyone/implementations/in-memory-database/ReturnAllEvents.memory";
import { ReturnAllEventsService } from "./AllEvents.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";

@Module({
    controllers: [ReturnAllEventsController],
    providers: [
        PrismaService,
        ReturnAllEventsImplementation,
        ReturnAllEventsInMemory,
        ReturnAllEventsService,
        IsJwtMiddleware,
    ],
})
export class ReturnAllEventsModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
                .forRoutes('all/events');
    };
};
