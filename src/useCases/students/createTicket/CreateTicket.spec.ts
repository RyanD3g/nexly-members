import { Test } from "@nestjs/testing";
import { CreateTicketController } from "./CreateTicket.controller";
import { PrismaService } from "../../../database";
import { CreateTicketImplementation } from "../../../repositories/Student/implementations/CreateTicket.service";
import { CreateTicketInMemory } from "../../../repositories/Student/implementations/in-memory-database/createTicket.memory";
import { CreateTicketService } from "./CreateTicket.service";

describe('Aqui será testado as funções de criação de ticket com usuário', ()=>{
    let ticketController:CreateTicketController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [CreateTicketController],
            providers: [
                PrismaService,
                CreateTicketImplementation,
                CreateTicketInMemory,
                CreateTicketService,
            ],
        }).compile();
        ticketController = moduleRef.get<CreateTicketController>(CreateTicketController);
    });

    it('Deveria criar um ticket normalmente', async ()=>{
        const created = await ticketController.createTicket({
            name:'Teste de nome',
            category:'Teste de categoria',
            description:'Teste de descrição',
            number:'Teste de número',
            priority:'Teste de prioridade',
            studentId:'456',
        }, true);
        expect(created).toHaveLength(1);
    });
});
