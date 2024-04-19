import { Injectable } from "@nestjs/common";
import { OAuthProviderFunctions } from "src/providers/implementations/OAuth.provider";
import { IReturnItemsPlaylist } from "./returnItems.DTO";

@Injectable()
export class ReturnItemsPlaylistService {
    constructor(
        private provider:OAuthProviderFunctions,
    ){};
    async returnItems(data:IReturnItemsPlaylist){
        return this.provider.returnContentInPlaylist(data);
    };
};
