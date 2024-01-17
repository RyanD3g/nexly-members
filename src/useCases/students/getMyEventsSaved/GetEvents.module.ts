import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { GetEventsController } from "./GetEvents.controller";
import { PrismaService } from "src/database";
import { GetEventsImplementation } from "src/repositories/Student/implementations/GetMyEventsInCalendar.service";
import { GetEventsInMemory } from "src/repositories/Student/implementations/in-memory-database/getEvents.memory";
import { GetEventsService } from "./GetEvents.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";

@Module({
    controllers:[GetEventsController],
    providers: [
        PrismaService,
        GetEventsImplementation,
        GetEventsInMemory,
        GetEventsService,
        IsJwtMiddleware,
    ],
})
export class GetEventsModel implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
                .forRoutes('events/calendar');
    };
};
