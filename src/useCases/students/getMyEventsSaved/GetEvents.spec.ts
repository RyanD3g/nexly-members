import { Test } from "@nestjs/testing";
import { GetEventsController } from "./GetEvents.controller";
import { PrismaService } from "src/database";
import { GetEventsImplementation } from "src/repositories/Student/implementations/GetMyEventsInCalendar.service";
import { GetEventsInMemory } from "src/repositories/Student/implementations/in-memory-database/getEvents.memory";
import { GetEventsService } from "./GetEvents.service";

describe('Aqui será testado todas as funções de retorno de eventos', ()=>{
    let controller:GetEventsController;
    beforeAll(async()=>{
        const moduleRef = await Test.createTestingModule({
            controllers:[GetEventsController],
            providers: [
                PrismaService,
                GetEventsImplementation,
                GetEventsInMemory,
                GetEventsService,
            ],
        }).compile();
        controller = moduleRef.get<GetEventsController>(GetEventsController);
    });

    it('Deveria retornar normalmente os eventos', async()=>{
        const execute = await controller.getAllMyEventsOnCalendar({
            studentId:'211',
            calendarId:'123',
        }, true);
        expect(execute).toHaveLength(2);
    });
});
