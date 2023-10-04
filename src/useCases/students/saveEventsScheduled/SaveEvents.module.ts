import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { SaveEventCalendarController } from "./SaveEvents.controller";
import { SaveEventImplementation } from "src/repositories/Student/implementations/SaveEventInCalendar.service";
import { SaveEventInCalendarService } from "./SaveEvents.service";
import { SaveEventInMemory } from "src/repositories/Student/implementations/in-memory-database/saveEvent.memory";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";

@Module({
    controllers: [SaveEventCalendarController],
    providers: [
        SaveEventImplementation,
        SaveEventInCalendarService,
        SaveEventInMemory,
        IsJwtMiddleware,
    ],
})
export class SaveEventModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
                .forRoutes('save/event/calendar');
    };
};
