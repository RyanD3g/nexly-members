import { Body, Controller, Param, Post } from "@nestjs/common";
import { SendAndGetMessagesService } from "./SendAndGetMessages.service";
import { ISendAndGetMessagesDTO } from "./SendAndGetMessages.DTO";

@Controller('message')
export class sendAndGetMessagesController {
    constructor(
        private service:SendAndGetMessagesService,
    ){};

    @Post('send/:roomId')
    async messageSend(
        @Body() body:ISendAndGetMessagesDTO,
        isTest:boolean = false,
        @Param('roomId') roomId?:string,
    ){
        try {
          const sendMessage = await this.service.sendMessages({ 
            roomId: roomId || body.roomId,
            user:body.user,
            contentMessage:body.contentMessage,
          }, isTest);  
          return { created:true, };
        } catch (error) {
            return error;
        };
    };

    @Post('all/:roomId')
    async messageAll(
        @Body() body:ISendAndGetMessagesDTO,
        isTest:boolean = false,
        @Param('roomId') roomId?:string,
    ){
        try {
          const sendMessage = await this.service.sendMessages({ 
            roomId: roomId || body.roomId,
            user:body.user,
            contentMessage:body.contentMessage,
          }, isTest);  
          return { created:true };
        } catch (error) {
            return error;
        };
    };
};
