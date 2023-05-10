import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ChangePasswordController } from "./changePassword.controller";
import { PrismaService } from "src/database";
import { ChangePasswordImplementation } from "src/repositories/Producer/implementations/ChangePassword.service";
import { ChangePasswordService } from "./changePassword.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";

@Module({
    imports: [],
    controllers: [ChangePasswordController],
    providers: [
        PrismaService,
        ChangePasswordImplementation,
        ChangePasswordService,
        IsJwtMiddleware,
    ]
})
export class ChangePasswordModuleProducer implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
        .apply(IsJwtMiddleware)
        .forRoutes('changePassword/producer');
    };
};
