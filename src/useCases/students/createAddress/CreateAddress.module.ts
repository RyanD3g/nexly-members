import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AddressCreateController } from "./CreateAddress.controller";
import { PrismaService } from "src/database";
import { CreateAddressImplementation } from "src/repositories/Student/implementations/CreateAddress.service";
import { CreateAddressService } from "./CreateAddress.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";

@Module({
    imports: [],
    controllers: [AddressCreateController],
    providers: [
        PrismaService,
        CreateAddressImplementation,
        CreateAddressService,
        IsJwtMiddleware,
    ],
})
export class CreateAddressModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
                .forRoutes('create/address/student')
    };
};
