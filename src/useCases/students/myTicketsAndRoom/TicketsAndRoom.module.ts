import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { TicketsAndRoomController } from "./TicketsAndRoom.controller";
import { PrismaService } from "src/database";
import { TicketsAndRoomImplementation } from "src/repositories/Student/implementations/TicketsAndRoom.service";
import { TicketsAndRoomInMemory } from "src/repositories/Student/implementations/in-memory-database/ticketsAndRoom.memory";
import { TicketsAndRoomService } from "./TicketsAndRoom.service";

@Module({
    controllers: [TicketsAndRoomController],
    providers:[
        PrismaService,
        TicketsAndRoomImplementation,
        TicketsAndRoomInMemory,
        TicketsAndRoomService,
        IsJwtMiddleware,
    ],
})
export class TicketsAndRoomModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
                .forRoutes('ticketsAndRoom/all/student');
    };
};
