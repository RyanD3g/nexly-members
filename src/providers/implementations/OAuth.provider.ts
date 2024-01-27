import { IDataOAuth } from "src/useCases/producer/OAuth/LoginOauth.DTO";
import { OAuthClientProvider } from "../IAuth.provider";
import * as OAuth from 'googleapis';
import { HttpException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/database";
const OAuthV2 = OAuth.google.auth.OAuth2;

@Injectable()
export class OAuthProviderFunctions implements OAuthClientProvider {
    private Client = new OAuthV2(
        "1026375848206-btmu3lvn7d4hhhscc1spn2u0a9bnfrct.apps.googleusercontent.com",
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
        });
        return url;
    };
    async getTokenClient(data: IDataOAuth): Promise<any> {
        const tokens = this.Client.getToken(data.token, async (err, tokens)=>{
            if(err) throw new HttpException(`Erro ao pegar token: ${err}`, 400);
            console.log(tokens.refresh_token)
            const tokenForAccess = await this.prisma.courses_Producer.update({
                where: { id:data?.courseId },
                data:{
                    youtubePlaylist:{
                        create:{
                            refreshToken:tokens.refresh_token
                        }
                    }
                }
            });
            return tokenForAccess;
        });
        return tokens;
    };
    async getChannelsClient(data: IDataOAuth): Promise<any> {
        const token = await this.prisma.courses_For_Youtube.findUnique({
            where: { id:data?.courseYtId },
        });
        if(!token || !token.refreshToken){
            throw new HttpException("Ainda não possui login!!", 403);
        };
        try {
            this.Client.setCredentials({ 
                refresh_token: token?.refreshToken,
            },);
            OAuth.google.youtube({ version:"v3", auth:this.Client, }).channels.list({
                part:['snippet,contentDetails,statistics'],
                mine:true,
            }, (err, response)=>{
                if(err){
                    throw new HttpException(`Erro ao chamar canais: ${err}`, 400);
                };
                return response.data.items;
            });
        } catch (error) {
            return error;
        };
    };
    async getPlaylist(data:IDataOAuth):Promise<any>{
        try {
            const refresh_token = (await this.prisma.courses_For_Youtube.findUnique({ where: { id:data.courseYtId } })).refreshToken;
            if(!refresh_token) throw new HttpException('Curso inexistente!!', 404);
            this.Client.setCredentials({
                refresh_token: refresh_token,
            });
            OAuth.google.youtube({ version:'v3', auth:this.Client, }).playlists.list({
                part: ['snippet,contentDetails'],
                channelId: data.channelId,
            }, async (err, response)=>{
                if(err) throw new HttpException(`Erro ao listar playlists ${err}`, 400);
                return response.data.items; 
            });
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
    async returnContentInPlaylist(data:IDataOAuth){
        try {
            
        } catch (error) {
            return error;
        };
    }
};
