import { Test } from "@nestjs/testing";
import { ReturnTicketsController } from "./ReturnTickets.controller";
import { PrismaService } from "../../../database";
import { ReturnTicketImplementation } from "../../../repositories/anyone/implementations/ReturnTickets.service";
import { ReturnTicketInMemory } from "../../../repositories/anyone/implementations/in-memory-database/ReturnTicket.memory";
import { ReturnTicketsService } from "./ReturnTickets.service";

describe('Aqui será testado a função de retornar os tickets criados', ()=>{
    let TicketController:ReturnTicketsController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            controllers:[ReturnTicketsController],
            providers:[
                PrismaService,
                ReturnTicketImplementation,
                ReturnTicketInMemory,
                ReturnTicketsService,
            ],
        }).compile();
        TicketController = moduleRef.get<ReturnTicketsController>(ReturnTicketsController);
    });

    it('Deveria retornar os tickets criados normalmente', async()=>{
        const tickets = await TicketController.getTickets(true);
        expect(tickets).toHaveLength(1);
    });
});
