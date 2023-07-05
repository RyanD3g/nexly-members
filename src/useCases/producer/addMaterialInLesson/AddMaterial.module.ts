import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AddMaterialController } from "./AddMaterial.controller";
import { PrismaService } from "src/database";
import { AddMaterialImplementation } from "src/repositories/Producer/implementations/AddMaterial.service";
import { AddMaterialService } from "./AddMaterial.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { IsProducer } from "src/middlewares/isProducer.middleware";
import { isSigned } from "src/middlewares/isSigned.middleware";
import { MulterModule } from "@nestjs/platform-express";
import configsMulter from 'src/middlewares/uploadDocument.middleware';

@Module({
    imports: [
        MulterModule.registerAsync({
            useFactory: () => (configsMulter)
        })
    ],
    controllers: [AddMaterialController],
    providers: [
        PrismaService,
        AddMaterialImplementation,
        AddMaterialService,
        IsJwtMiddleware,
        IsProducer,
        isSigned,
    ],
})
export class AddMaterialModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(
                IsJwtMiddleware,
                IsProducer,
                isSigned,
            )
                .forRoutes('material/add');
    };
};
