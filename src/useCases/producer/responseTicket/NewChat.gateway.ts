import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
  } from '@nestjs/websockets';
  import { Server } from 'socket.io';
  
  @WebSocketGateway({
    cors: {
      origin: '*',
    },
  })
  export class NewChatGateway {
    @WebSocketServer()
    server: Server;
  
    @SubscribeMessage('message')
    findAll(@MessageBody() data: any){
      console.log(data)
      return 'ok';
    };
  }
