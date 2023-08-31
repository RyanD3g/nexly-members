import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AlsModule } from "src/als.module";
import { UserIdContext } from "src/contexts/userId.context";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { IsProducer } from "src/middlewares/isProducer.middleware";
import { isSigned } from "src/middlewares/isSigned.middleware";
import { CreateNewEventOnCalendarController } from "./CreateEvent.controller";
import { PrismaService } from "src/database";
import { CreateEventOnCalendarImplementation } from "src/repositories/Producer/implementations/CreateEventOnCalendar.service";
import { CreateEventOnCalendarInMemory } from "src/repositories/Producer/implementations/in-memory-database/createEventOnCalendar.memory";
import { CreateEventSheduledService } from "./CreateEvent.service";

@Module({
    imports: [AlsModule],
    controllers: [CreateNewEventOnCalendarController],
    providers: [
        PrismaService,
        CreateEventSheduledService,
        CreateEventOnCalendarInMemory,
        CreateEventOnCalendarImplementation,
        IsJwtMiddleware, 
        IsProducer, 
        isSigned, 
        UserIdContext,
    ],
})
export class CreateEventScheluledModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware, IsProducer, isSigned, UserIdContext)
                .forRoutes('create/newEvent');
    };
};
