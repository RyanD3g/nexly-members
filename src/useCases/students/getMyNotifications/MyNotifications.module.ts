import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { PrismaService } from "src/database";
import { MyNotificationsService } from "./MyNotifications.service";
import { GetMyNotificationsImplementations } from "src/repositories/Student/implementations/GetMyNotifications.service";
import { GetMyNotificationsInMemory } from "src/repositories/Student/implementations/in-memory-database/getMyNotifications.memory";
import { MyNotificationsController } from "./MyNotifications.controller";

@Module({
    imports: [],
    controllers: [MyNotificationsController],
    providers: [
        PrismaService,
        MyNotificationsService,
        GetMyNotificationsImplementations,
        GetMyNotificationsInMemory,
        IsJwtMiddleware,
    ],
})
export class MyNotificationsModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
                .forRoutes('change-favorite/lesson/student')
    };
};
