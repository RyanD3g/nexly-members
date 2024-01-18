import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { LoginAndSetItemsProvidersController } from "./LoginOauth.controller";
import { LoginOAuthService } from "./LoginOauth.service";
import { OAuthProviderFunctions } from "src/providers/implementations/OAuth.provider";
import { PrismaService } from "src/database";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { isSigned } from "src/middlewares/isSigned.middleware";
import { IsProducer } from "src/middlewares/isProducer.middleware";

@Module({
    imports: [],
    controllers: [
        LoginAndSetItemsProvidersController,
    ],
    providers: [
        LoginOAuthService,
        OAuthProviderFunctions,
        PrismaService,
        IsJwtMiddleware,
        isSigned, 
        IsProducer,
    ],
})
export class LoginOAuthModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
        .apply(IsJwtMiddleware, isSigned, IsProducer)
            .forRoutes('/Oauth/listChannels', '/Oauth/listPlaylists/setChannels', '/Oauth/setPlaylist');
    };
};
