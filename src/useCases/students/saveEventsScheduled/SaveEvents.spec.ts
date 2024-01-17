import { Test } from "@nestjs/testing";
import { SaveEventCalendarController } from "./SaveEvents.controller";
import { SaveEventImplementation } from "src/repositories/Student/implementations/SaveEventInCalendar.service";
import { SaveEventInCalendarService } from "./SaveEvents.service";
import { SaveEventInMemory } from "src/repositories/Student/implementations/in-memory-database/saveEvent.memory";
import { PrismaService } from "src/database";

describe('Aqui será testado as funções de salvar eventos', ()=>{
    let controller:SaveEventCalendarController;
    beforeAll(async()=>{
        const moduleRef = await Test.createTestingModule({
            controllers: [SaveEventCalendarController],
            providers: [
                PrismaService,
                SaveEventImplementation,
                SaveEventInCalendarService,
                SaveEventInMemory,
            ],
        }).compile();
        controller = moduleRef.get<SaveEventCalendarController>(SaveEventCalendarController);
    });
    it('Deveria salvar um evento normalmente', async ()=>{
       const executeTestInControllerInMemory = await controller.sendDataForLogic({
        eventId:'123',
        studentId:'6789',
       }, true);
       console.log(executeTestInControllerInMemory)
       expect(executeTestInControllerInMemory.created).toBeDefined();
    });
    it('Deveria retornar um erro, por não encontrar', async()=>{
        const executeTestInControllerInMemory = await controller.sendDataForLogic({
            eventId:'4545',
            studentId:'6789',
           }, true);
           expect(executeTestInControllerInMemory).toThrow;
    });
    it('Deveria retornar um erro, por evento já passado', async()=>{
        const executeTestInControllerInMemory = await controller.sendDataForLogic({
            eventId:'321',
            studentId:'6789',
           }, true);
           expect(executeTestInControllerInMemory).toThrow;
    });
});
