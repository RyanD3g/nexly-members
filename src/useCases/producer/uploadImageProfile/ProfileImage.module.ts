import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import configsMulter from '../../../middlewares/uploadImages.middleware';
import { ProfileImageProducerController } from "./ProfileImage.controller";
import { PrismaService } from "src/database";
import { ProfileImageProducerImplementation } from "src/repositories/Producer/implementations/ProfileImageProducer.service";
import { ProfileImageProducerService } from "./ProfileImage.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";

@Module({
    imports: [
        MulterModule.registerAsync({
            useFactory: ()=> (configsMulter),
        }),
    ],
    controllers:[ProfileImageProducerController],
    providers: [
        PrismaService,
        ProfileImageProducerImplementation,
        ProfileImageProducerService,
        MulterModule,
        IsJwtMiddleware,
    ],
})
export class ProfileImageModuleProducer implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
            .forRoutes('upload/image/profile/producer')
    };
};
