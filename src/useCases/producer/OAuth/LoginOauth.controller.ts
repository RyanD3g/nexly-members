import { Body, Controller, Get, Post, Put, Redirect, Request, Res } from "@nestjs/common";
import { LoginOAuthService } from "./LoginOauth.service";
import { IDataOAuth } from "./LoginOauth.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";
import { Response } from "express";
import { Courses_For_Youtube } from "@prisma/client";

@Controller("Oauth")
export class LoginAndSetItemsProvidersController {
    constructor(
        private service:LoginOAuthService,
    ){};
    @Get("getUrl")
    async getUrl(
        @Request() req:CustomRequest,
    ){
        try {
            const sendRequestForUrl = await this.service.accessUrl();
            return sendRequestForUrl;  
        } catch (error) {
            return error;
        };
    };
    @Post("/producer")
    async getAllToken(
        @Request() req:CustomRequest,
        @Res() res:Response,
        @Body() body:IDataOAuth,
    ){
        try {
            console.log("TOKEN AQUI!!!: ", req.body?.code)
            const dataOFRegisterToken = await this.service.returnTokenOAuth({ courseYtId:body?.courseYtId, courseId:body?.courseId, token:req.body?.code as string }) as Courses_For_Youtube;
            return res.json({ data:dataOFRegisterToken });
        } catch (error) {
            return error;
        };
    };
    @Post("/listChannels")
    async lisAllChannelsInMyAccount(
        @Body() body:IDataOAuth,
        @Request() req:CustomRequest,
    ){
        return await this.service.listChannels({ courseYtId:body.id, producerId:req.producerId });
    };
    @Post("/listPlaylists/setChannels")
    async lisAllPlaylistsAndSetChannelInMyAccount(
        @Body() body:IDataOAuth,
        @Request() req:CustomRequest,
    ){
        return await this.service.setChannelsAndListPlaylists({ courseYtId:body.id, producerId:req.producerId, channelId:body.channelId });
    };
    @Post("/setPlaylist")
    async SetPlaylistInMyAccount(
        @Body() body:IDataOAuth,
        @Request() req:CustomRequest,
    ){
        return await this.service.setPlaylist({ courseYtId:body.courseYtId, producerId:req.producerId, playlistId:body.playlistId });
    };
};
