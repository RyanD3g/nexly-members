import { IDataOAuth } from "src/useCases/producer/OAuth/LoginOauth.DTO";
import { OAuthClientProvider } from "../IAuth.provider";
import * as OAuth from 'googleapis';
import { HttpException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/database";
import { IReturnItemsPlaylist } from "src/useCases/producer/returnItemsPlaylists/returnItems.DTO";
const OAuthV2 = OAuth.google.auth.OAuth2;

@Injectable()
export class OAuthProviderFunctions implements OAuthClientProvider {
    private Client = new OAuthV2(
        "689795171746-91m11arq9q8bgq53q8dalromrfakksam.apps.googleusercontent.com",
        "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",
        "http://localhost:5173/producer/cursos",
    );
    constructor(
        private prisma:PrismaService,
    ){};
    async connectClient(): Promise<any> {
        const url = this.Client.generateAuthUrl({
            access_type: 'offline',
            scope: ['https://www.googleapis.com/auth/youtube'],
            prompt:'select_account',
        });
        return url;
    };
    async getTokenClient(data: IDataOAuth): Promise<any> {
        let playlistCreated:any;
        const tokenRegistred = async ()=>{
            const tokens = this.Client.getToken(data.token, async (err, tokens)=>{
                if(err) throw new HttpException(`Erro ao pegar token: ${err}`, 400);
                const tokenForAccess = await this.prisma.courses_Producer.update({
                    where: { id:data?.courseId },
                    include:{ youtubePlaylist:true, },
                    data:{
                        youtubePlaylist:{
                            create:{
                                refreshToken:tokens.refresh_token
                            }
                        }
                    },
                });
                return tokenForAccess;
            });
        };
        await tokenRegistred();
        return await this.prisma.courses_Producer.findUnique({
            where:{ id:data?.courseId, },
            include:{ youtubePlaylist:true, },
        });
    };
    async getChannelsClient(data: IDataOAuth): Promise<any> {
        const token = await this.prisma.courses_For_Youtube.findUnique({
            where: { id:data?.courseYtId },
        });
        if(!token || !token.refreshToken){
            throw new HttpException("Ainda não possui login!!", 403);
        };
        const returnDataChannel = ()=>{
            return new Promise((resolve, reject) =>{
                OAuth.google.youtube({ version:"v3", auth:this.Client, }).channels.list({
                    part:['snippet,contentDetails,statistics'],
                    mine:true,
                }, (err, response)=>{
                    if(err){
                        reject(new HttpException(`Erro ao chamar canais: ${err}`, 400));
                    };
                    resolve(response.data.items);
                });
            });
        };
        try {
            this.Client.setCredentials({ 
                refresh_token: token?.refreshToken,
            },);
            const returnItemsChannel = await returnDataChannel.call(this);
            return returnItemsChannel;
        } catch (error) {
            return error;
        };
    };
    async getPlaylist(data:IDataOAuth):Promise<any>{
        const returnDataChannels = ()=>{
            return new Promise((resolve, reject)=>{
                OAuth.google.youtube({ version:'v3', auth:this.Client, }).playlists.list({
                    part: ['snippet,contentDetails'],
                    channelId: data.channelId,
                }, async (err, response)=>{
                    if(err) reject(new HttpException(`Erro ao listar playlists ${err}`, 400));
                    resolve(response.data.items); 
                });
            });
        }
        try {
            const refresh_token = (await this.prisma.courses_For_Youtube.findUnique({ where: { id:data.courseYtId } })).refreshToken;
            if(!refresh_token) throw new HttpException('Curso inexistente!!', 404);
            this.Client.setCredentials({
                refresh_token: refresh_token,
            });
            console.log("VEJAME: ", await returnDataChannels.call(this))
            return await returnDataChannels.call(this);
        } catch (error) {
            return error;
        };
    };
    async setChannel(data:IDataOAuth):Promise<any>{
        const channelChanged = await this.prisma.courses_For_Youtube.update({
            where:{ id:data.courseYtId },
            data:{
                channelIdChanged:data.channelId,
            },
        });
        return channelChanged;
    };
    async setPlaylist(data:IDataOAuth):Promise<any>{
        const setPlaylistId = await this.prisma.courses_For_Youtube.update({
            where:{ id: data?.courseYtId },
            data:{
                playlistIdChanged:data?.playlistId
            }
        });
        return setPlaylistId;
    };
    async returnContentInPlaylist(data:IReturnItemsPlaylist){
        try {
            const { refreshToken, playlistIdChanged, } = await this.prisma.courses_For_Youtube.findUnique({
                where:{ id:data.courseYtId, },
            });
            return OAuth.google.youtube({ version:'v3', auth:refreshToken, }).playlistItems.list({
                part:['snippet'],
                playlistId:playlistIdChanged,
            }, (err, response)=>{
                if(err){
                    throw new HttpException(`Erro ao listar items da playlist: ${err}`, 400);
                };
                return response.data.items;
            });
        } catch (error) {
            return error;
        };
    }
};
