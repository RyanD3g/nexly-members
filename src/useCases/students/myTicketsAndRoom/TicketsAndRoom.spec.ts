import { Test } from "@nestjs/testing";
import { TicketsAndRoomController } from "./TicketsAndRoom.controller";
import { PrismaService } from "../../../database";
import { TicketsAndRoomImplementation } from "../../../repositories/Student/implementations/TicketsAndRoom.service";
import { TicketsAndRoomInMemory } from "../../../repositories/Student/implementations/in-memory-database/ticketsAndRoom.memory";
import { TicketsAndRoomService } from "./TicketsAndRoom.service";

describe('Aqui será testado funções de retorno de dados do ticket de um usuário', ()=>{
    let ticketsAndRoomController:TicketsAndRoomController;

    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            controllers: [TicketsAndRoomController],
            providers:[
                PrismaService,
                TicketsAndRoomImplementation,
                TicketsAndRoomInMemory,
                TicketsAndRoomService,
            ],
        }).compile();
        ticketsAndRoomController = moduleRef.get<TicketsAndRoomController>(TicketsAndRoomController);
    });

    it('Deveria retornar normalmente', async ()=>{
        const testeDeRetorno = await ticketsAndRoomController.allMyData({
            studentId:'356',
            ticketId:'123',
        }, true);
        expect(testeDeRetorno).toHaveLength(1);
    });

    it('Deveria retornar um array vazio por não ter encontrado nenhum registro com aqueles dados', async ()=>{
        const testeDeRetorno = await ticketsAndRoomController.allMyData({
            studentId:'4546',
            ticketId:'4646',
        }, true);
        expect(testeDeRetorno).toHaveLength(0);
    });
});
