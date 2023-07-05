import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AddressCreateController } from "./CreateAddress.controller";
import { PrismaService } from "src/database";
import { CreateAddressImplementation } from "src/repositories/Producer/implementations/CreateAddress.service";
import { CreateAddressService } from "./CreateAddress.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { IsProducer } from "src/middlewares/isProducer.middleware";
import { isSigned } from "src/middlewares/isSigned.middleware";

@Module({
    imports: [],
    controllers: [AddressCreateController],
    providers: [
        PrismaService,
        CreateAddressImplementation,
        CreateAddressService,
        IsJwtMiddleware,
        IsProducer,
        isSigned,
    ],
})
export class CreateAddressModuleProducer implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware, IsProducer, isSigned)
                .forRoutes('create/address/producer')
    };
};
