import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { getDataFullProducerController } from "./FullProducer.controller";
import { PrismaService } from "src/database";
import { GetFullDataProducer } from "src/repositories/Producer/implementations/FullDataProducer.service";
import { getDataAndValidateFullProducerService } from "./FullProducer.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { isSigned } from "src/middlewares/isSigned.middleware";
import { IsProducer } from "src/middlewares/isProducer.middleware";

@Module({
    imports: [],
    controllers: [getDataFullProducerController],
    providers: [
        PrismaService,
        GetFullDataProducer,
        getDataAndValidateFullProducerService,
        IsJwtMiddleware,
        IsProducer, 
        isSigned,
    ],
})
export class GetFullProducerDataModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware, IsProducer, isSigned)
            .forRoutes('profile/producer/all')
    };
};

