import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { PrismaService } from "src/database";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { AddressUpdateController } from "./UpdateAddress.controller";
import { UpdateAddressImplementation } from "src/repositories/Producer/implementations/UpdateAddress.service";
import { UpdateAddressService } from "./UpdateAddress.service";

@Module({
    imports: [],
    controllers: [AddressUpdateController],
    providers: [
        PrismaService,
        UpdateAddressImplementation,
        UpdateAddressService,
        IsJwtMiddleware,
    ],
})
export class UpdateAddressModuleProducer implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
                .forRoutes('update/address/producer')
    };
};
