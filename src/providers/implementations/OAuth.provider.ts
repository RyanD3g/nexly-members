import { IDataOAuth } from "src/useCases/producer/OAuth/LoginOauth.DTO";
import { OAuthClientProvider } from "../IAuth.provider";
import * as OAuth from 'googleapis';
import { HttpException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/database";
import { IReturnItemsPlaylist } from "src/useCases/producer/returnItemsPlaylists/returnItems.DTO";
import { logger } from "winston.preload";
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
        const tokenRegistred =  ()=>{
            return new Promise((resolve, reject)=>{
                const tokens = this.Client.getToken(data.token, async (err, tokens)=>{
                    if(err) reject(new HttpException(`Erro ao pegar token: ${err}`, 400));
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
                    if(!tokenForAccess) {
                        logger.warn(`Impossível criar um curso. Dica: Verifique se o ID está correto. Função: Cadastrar token do OAuth`);
                        reject(new HttpException('Impossível criar um curso. Dica: Verifique se o ID está correto', 400));
                    }
                    resolve(tokenForAccess);
                });
            });
        };
        const registred = await tokenRegistred();
        return registred;
    };
    async getChannelsClient(data: IDataOAuth): Promise<any> {
        const token = await this.prisma.courses_For_Youtube.findUnique({
            where: { id:data?.courseYtId },
        });
        if(!token || !token.refreshToken) throw new HttpException("Ainda não possui login!!", 403);
        const returnDataChannel = ()=>{
            return new Promise((resolve, reject) =>{
                OAuth.google.youtube({ version:"v3", auth:this.Client, }).channels.list({
                    part:['snippet,contentDetails,statistics'],
                    mine:true,
                }, (err, response)=>{
                    if(err){
                        logger.error(`Houve um erro ao listar canais do YouTube: ${err}`);
                        reject(new HttpException(`Erro ao chamar canais: ${err}`, 400));
                    };
                    resolve(response.data.items);
                });
            });
        };
        this.Client.setCredentials({ 
            refresh_token: token?.refreshToken,
        },);
        const returnItemsChannel = await returnDataChannel.call(this);
        return returnItemsChannel;
    };
    async getPlaylist(data:any):Promise<any>{
        const returnDataChannels = ()=>{
            return new Promise((resolve, reject)=>{
                OAuth.google.youtube({ version:'v3', auth:this.Client, }).playlists.list({
                    part: ['snippet,contentDetails'],
                    mine:true,
                    channelId: data.channelId,
                }, (err, response)=>{
                    if(err) {
                        logger.error(`Houve um erro ao listar playlists do YouTube: ${err}`);
                        reject(new HttpException(`Erro ao listar playlists ${err}`, 400));
                    }
                    resolve(response.data.items); 
                });
            });
        }
        if(!data?.refreshToken) throw new HttpException('Curso inexistente!!', 404);
        this.Client.setCredentials({
            refresh_token: data?.refreshToken,
        });
        return await returnDataChannels.call(this);
    };
    async setChannel(data:IDataOAuth):Promise<any>{
        const channelChanged = await this.prisma.courses_For_Youtube.update({
            where:{ id:data.courseYtId },
            data:{
                channelIdChanged:data.channelId,
            },
        });
        if(!channelChanged) {
            logger.error(`Houve um erro ao cadastrar ID do canal no YouTube. ${channelChanged}`);
            throw new HttpException(`Erro ao cadastrar canal escolhido, verifique os dados enviados. ${channelChanged}`, 400);
        }
        return channelChanged;
    };
    async setPlaylist(data:IDataOAuth):Promise<any>{
        const setPlaylistId = await this.prisma.courses_For_Youtube.update({
            where:{ id: data?.courseYtId },
            data:{
                playlistIdChanged:data?.playlistId
            }
        });
        if(!setPlaylistId) {
            logger.error(`Houve um erro ao cadastrar ID da playlist no YouTube. ${setPlaylistId}`);
            throw new HttpException(`Erro ao cadastrar playlist escolhida, verifique os dados enviados. ${setPlaylistId}`, 400);
        };
        return setPlaylistId;
    };
    async returnContentInPlaylist(data:IReturnItemsPlaylist){
        try {
            const { refreshToken, playlistIdChanged, } = await this.prisma.courses_For_Youtube.findUnique({
                where:{ id:data.courseYtId, },
            });
            this.Client.setCredentials({ 
                refresh_token: refreshToken,
            },);
            return await new Promise((resolve, reject)=>{
                OAuth.google.youtube({ version:'v3', auth:this.Client, }).playlistItems.list({
                    part:['snippet'],
                    playlistId:playlistIdChanged,
                }, (err, response)=>{
                    if(err){
                        logger.error(`Erro ao listar items da playlist: ${err}`);
                        reject(new HttpException(`Erro ao listar items da playlist: ${err}`, 400));
                    };
                    resolve(response.data.items);
                });
            });
        } catch (error) {
            return error;
        };
    }
};
