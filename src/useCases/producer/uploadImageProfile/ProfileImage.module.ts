import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { ProfileImageProducerController } from "./ProfileImage.controller";
import { PrismaService } from "src/database";
import { ProfileImageProducerImplementation } from "src/repositories/Producer/implementations/ProfileImageProducer.service";
import { ProfileImageProducerService } from "./ProfileImage.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { configsMulterProducerImages } from "src/middlewares/uploadImages.middleware";

@Module({
    imports: [
        MulterModule.registerAsync({
            useFactory: ()=> (configsMulterProducerImages),
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
