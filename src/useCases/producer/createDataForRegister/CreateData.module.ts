import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { CreateDataForProducerController } from "./CreateData.controller";
import { PrismaService } from "src/database";
import { CreateDataForProducerService } from "./CreateData.service";
import { CreateDataProducerImplementation } from "src/repositories/Producer/implementations/CreateDataProducer.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { IsProducer } from "src/middlewares/isProducer.middleware";
import { isSigned } from "src/middlewares/isSigned.middleware";

@Module({
    imports: [],
    controllers: [CreateDataForProducerController],
    providers: [
        PrismaService,
        CreateDataForProducerService,
        CreateDataProducerImplementation,
        IsProducer, 
        isSigned,
    ]    
})
export class CreateDataProducerModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware, IsProducer, isSigned)
            .forRoutes('create/data/producer')
    };
};
