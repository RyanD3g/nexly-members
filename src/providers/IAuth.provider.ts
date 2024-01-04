export abstract class OAuthClientProvider {
    abstract connectClient<T>(data:T): Promise<T>;
    abstract getTokenClient(data:any): Promise<any>;
    abstract getChannelsClient(data:any): Promise<any>;
    abstract setChannel(data:any):Promise<any>;
    abstract setPlaylist(data:any):Promise<any>;
    abstract getPlaylist(data:any):Promise<any>;
};
