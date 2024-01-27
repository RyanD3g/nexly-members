import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ReturnAllEventsController } from "src/useCases/anyone/allEvents/AllEvents.controller";
import { ReturnItemsPlaylistService } from "./returnItems.service";
import { IReturnItemsPlaylist } from "./returnItems.DTO";
import { OAuthProviderFunctions } from "src/providers/implementations/OAuth.provider";
import { PrismaService } from "src/database";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { isSigned } from "src/middlewares/isSigned.middleware";
import { IsProducer } from "src/middlewares/isProducer.middleware";

@Module({
    providers:[
        ReturnItemsPlaylistService,
        OAuthProviderFunctions,
        PrismaService,
        IsJwtMiddleware,
        isSigned, 
        IsProducer,
    ],
    controllers:[ReturnAllEventsController],
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
