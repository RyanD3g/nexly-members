import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { NotificationsController } from "./MyNotifications.controller";
import { PrismaService } from "src/database";
import { NotificationsProducerImplementation } from "src/repositories/Producer/implementations/Notifications.service";
import { NotificationsProducerInMemory } from "src/repositories/Producer/implementations/in-memory-database/getNotifications.memory";
import { NotificationsService } from "./MyNotifications.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { isSigned } from "src/middlewares/isSigned.middleware";
import { IsProducer } from "src/middlewares/isProducer.middleware";

@Module({
    imports: [],
    controllers: [NotificationsController],
    providers: [
        PrismaService,
        NotificationsProducerImplementation,
        NotificationsProducerInMemory,
        NotificationsService,
        IsJwtMiddleware,
        isSigned, 
        IsProducer,
    ],
})
export class NotificationsModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware, isSigned, IsProducer)
                .forRoutes('my/notifications/producer');
    };
};
