import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AllRoomsByProducerController } from "./AllRooms.controller";
import { PrismaService } from "src/database";
import { AllRoomsByProducerImplementation } from "src/repositories/Producer/implementations/AllRoomsByProducer.service";
import { AllRoomsByProducerService } from "./AllRooms.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { isSigned } from "src/middlewares/isSigned.middleware";
import { IsProducer } from "src/middlewares/isProducer.middleware";
import { CacheImplementation } from "src/providers/implementations/Redis.service";

@Module({
    imports: [],
    controllers: [AllRoomsByProducerController],
    providers:[
        PrismaService,
        AllRoomsByProducerImplementation,
        AllRoomsByProducerService,
        CacheImplementation,
    ],
})
export class AllRoomsModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware, isSigned, IsProducer)
                .forRoutes('room/all');
    };
};
