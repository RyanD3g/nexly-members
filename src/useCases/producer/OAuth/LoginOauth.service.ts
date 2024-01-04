import { Injectable } from "@nestjs/common";
import { OAuthProviderFunctions } from "src/providers/implementations/OAuth.provider";
import { IDataOAuth } from "./LoginOauth.DTO";

@Injectable()
export class LoginOAuthService {
    constructor(
        private providers:OAuthProviderFunctions,
    ){};
    async accessUrl(){
        return await this.providers.connectClient();
    };
    async returnTokenOAuth(data:IDataOAuth){
        return await this.providers.getTokenClient(data);
    };
    async listChannels(data:IDataOAuth){
        return await this.providers.getChannelsClient(data);
    };
    async setChannelsAndListPlaylists(data:IDataOAuth){
        const setChannel = await this.providers.setChannel(data);
        return await this.providers.getPlaylist(setChannel);
    };
    async setPlaylist(data:IDataOAuth){
        return await this.providers.setPlaylist(data);
    };
};
