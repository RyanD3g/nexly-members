import { Test } from "@nestjs/testing";
import { sendAndGetMessagesController } from "./SendAndGetMessages.controller";
import { PrismaService } from "../../../database";
import { SendMessageAndGetMessagesImplementation } from "../../../repositories/anyone/implementations/sendAndGetMessages.service";
import { SendMessageAndGetMessagesInMemory } from "../../../repositories/anyone/implementations/in-memory-database/sendAndGetMessages.memory";

describe('Aqui será testado as funções de criar e retornar mensagen', ()=>{
    let sendAndGetController:sendAndGetMessagesController;
    beforeAll(async()=>{
        const moduleRef = await Test.createTestingModule({
            controllers: [sendAndGetMessagesController],
            providers: [
                PrismaService,
                SendMessageAndGetMessagesImplementation,
                SendMessageAndGetMessagesInMemory,
            ],
        }).compile();
        sendAndGetController = moduleRef.get<sendAndGetMessagesController>(sendAndGetMessagesController);
    });

    it('Deveria criar uma mensagem normalmente', async ()=>{
        const createMessage = await sendAndGetController.messageSend({
            roomId:'123',
            user:'Teste de usuário',
            contentMessage:'Teste de conteúdo',
        }, true);
        expect(createMessage[0].user).toEqual('Teste de usuário');
    });

    it('Deveria retornar todas as mensagens', async ()=>{
        const createMessage = await sendAndGetController.messageAll({
            roomId:'123',
        }, true);
        expect(createMessage).toHaveLength(1);
    });
});
