import { Test } from "@nestjs/testing";
import { CreateNewEventOnCalendarController } from "./CreateEvent.controller";
import { PrismaService } from "src/database";
import { CreateEventSheduledService } from "./CreateEvent.service";
import { CreateEventOnCalendarInMemory } from "src/repositories/Producer/implementations/in-memory-database/createEventOnCalendar.memory";
import { CreateEventOnCalendarImplementation } from "src/repositories/Producer/implementations/CreateEventOnCalendar.service";

describe('Aqui será testado a função de criar um evento agendado', ()=>{
    let controller:CreateNewEventOnCalendarController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            controllers: [CreateNewEventOnCalendarController],
            providers: [
                PrismaService,
                CreateEventSheduledService,
                CreateEventOnCalendarInMemory,
                CreateEventOnCalendarImplementation,
            ],
        }).compile();
        controller = moduleRef.get<CreateNewEventOnCalendarController>(CreateNewEventOnCalendarController);
    });

    it('Deveria criar normalmente um evento', async ()=>{
        const executeTest = await controller.getDataForEventCreation({
            titleEvent:'Teste de titulo de evento',
            dataOfEvent:'12/05/2023',
            descriptionAboutEvent:'Teste de descrição',
            hourOfEvent:'18:00 - 19:00',
            producerId:'568',
        }, true);
        expect(executeTest).toHaveLength(1);
    });
});
