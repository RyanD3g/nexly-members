import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { DeleteAccountController } from "./DeleteAccount.controller";
import { PrismaService } from "src/database";
import { DeleteAccountImplementation } from "src/repositories/Producer/implementations/DeleteAccount.service";
import { DeleteAccountInMemory } from "src/repositories/Producer/implementations/in-memory-database/deleteAccount.memory";
import { DeleteAccountService } from "./DeleteAccount.service";
import { IsProducer } from "src/middlewares/isProducer.middleware";
import { isSigned } from "src/middlewares/isSigned.middleware";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";

@Module({
    imports: [],
    controllers: [DeleteAccountController],
    providers:[
        PrismaService,
        DeleteAccountImplementation,
        DeleteAccountInMemory,
        DeleteAccountService,
        IsJwtMiddleware,
        IsProducer,
        isSigned,
    ],
})
export class DeleteAccountModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(
                IsJwtMiddleware,
                IsProducer,
                isSigned,
            )
                .forRoutes('delete/account/producer');
    };
};
