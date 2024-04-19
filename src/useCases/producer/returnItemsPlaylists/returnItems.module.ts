import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ReturnItemsPlaylistService } from "./returnItems.service";
import { IReturnItemsPlaylist } from "./returnItems.DTO";
import { OAuthProviderFunctions } from "src/providers/implementations/OAuth.provider";
import { PrismaService } from "src/database";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { isSigned } from "src/middlewares/isSigned.middleware";
import { IsProducer } from "src/middlewares/isProducer.middleware";
import { ReturnItemsController } from "./returnItems.controller";

@Module({
    providers:[
        ReturnItemsPlaylistService,
        OAuthProviderFunctions,
        PrismaService,
        IsJwtMiddleware,
        isSigned, 
        IsProducer,
    ],
    controllers:[ReturnItemsController],
})
export class ReturnItemsPlaylistModel implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(
            IsJwtMiddleware,
            isSigned, 
            IsProducer,
        ).forRoutes('/return/items/playlist');
    };
};
