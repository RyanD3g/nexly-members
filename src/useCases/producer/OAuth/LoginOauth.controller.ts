import { Body, Controller, Get, Post, Put, Redirect, Request, Res } from "@nestjs/common";
import { LoginOAuthService } from "./LoginOauth.service";
import { IDataOAuth } from "./LoginOauth.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";
import { Response } from "express";
import { Courses_For_Youtube } from "@prisma/client";
import { logger } from "winston.preload";

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
            logger.error(`Houve um erro ao gerar a url na rota /Oauth/getUrl: ${error}`);
            if(error?.length === 0 || !error){
                logger.info(`Houve um erro ao retornar o erro, os logs devem ser verificados!!`);
                return { erro:"Houve um erro com a api, os logs serão verificados." };
            };
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
            const dataOFRegisterToken = await this.service.returnTokenOAuth({ courseYtId:body?.courseYtId, courseId:body?.courseId, token:req.body?.code as string }) as Courses_For_Youtube;
            return res.json({ data:dataOFRegisterToken });
        } catch (error) {
            logger.error(`Houve um erro ao cadastrar o token e retornar os dados da rota /OAuth/producer: ${error}`);
            if(error?.length === 0 || !error){
                logger.info(`Houve um erro ao retornar o erro, os logs devem ser verificados!!`);
                return { erro:"Houve um erro com a api, os logs serão verificados." };
            };
            return error;
        };
    };
    @Post("/listChannels")
    async lisAllChannelsInMyAccount(
        @Body() body:IDataOAuth,
        @Request() req:CustomRequest,
    ){
        try {
            return await this.service.listChannels({ courseYtId:body.id, producerId:req.producerId });
        } catch (error) {
            logger.error(`Houve um erro ao listar canais da rota /OAuth/listChannels: ${error}`);
            if(error?.length === 0 || !error){
                logger.info(`Houve um erro ao retornar o erro, os logs devem ser verificados!!`);
                return { erro:"Houve um erro com a api, os logs serão verificados." };
            };
            return error;
        };
    };
    @Post("/listPlaylists/setChannels")
    async lisAllPlaylistsAndSetChannelInMyAccount(
        @Body() body:IDataOAuth,
        @Request() req:CustomRequest,
    ){
        try {
            return await this.service.setChannelsAndListPlaylists({ courseYtId:body.id, producerId:req.producerId, channelId:body.channelId });
        } catch (error) {
            logger.error(`Houve um erro ao listar playlists /OAuth/listPlaylists/setChannels: ${error}`);
            if(error?.length === 0 || !error){
                logger.info(`Houve um erro ao retornar o erro, os logs devem ser verificados!!`);
                return { erro:"Houve um erro com a api, os logs serão verificados." };
            };
            return error;
        }
    };
    @Post("/setPlaylist")
    async SetPlaylistInMyAccount(
        @Body() body:IDataOAuth,
        @Request() req:CustomRequest,
    ){

        try {
            return await this.service.setPlaylist({ courseYtId:body.courseYtId, producerId:req.producerId, playlistId:body.playlistId });
        } catch (error) {
            logger.error(`Houve um erro ao setar playlist /OAuth/setPlaylist: ${error}`);
            if(error?.length === 0 || !error){
                logger.info(`Houve um erro ao retornar o erro, os logs devem ser verificados!!`);
                return { erro:"Houve um erro com a api, os logs serão verificados." };
            };
            return error;
        };
    };
};
