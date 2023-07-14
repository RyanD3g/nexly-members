import {
    MessageBody,
    OnGatewayConnection,
    OnGatewayDisconnect,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
  } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
  
  @WebSocketGateway({
    cors: {
      origin: '*',
    },
  })
  export class NewChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private roomSelected:string;
    
    @WebSocketServer()
    server: Server;

    @SubscribeMessage('selectRoom')
    handleSelectRoom(@MessageBody() data:any){
      return this.roomSelected = data.nameRoom;
    };

    @SubscribeMessage('enterRoom')
    async handleCreateRomm(client:Socket){
      client.join(this.roomSelected);
      this.server.to(this.roomSelected).emit('joinedRoom', { message:`O usuário entrou na sala`});
    };
  
    @SubscribeMessage('message')
    handleNewMessage(@MessageBody() data:any){
      this.server.to(data.nameRoom).emit('newMessage', { message:data.message });
    };

    handleConnection(client: any) {
      console.log(`Usuário conectado`);
    };
    handleDisconnect(client: Socket) {
      console.log(`Usuário desconectado`);
    };
  };
