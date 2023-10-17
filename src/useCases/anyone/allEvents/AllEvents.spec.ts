import { Test } from "@nestjs/testing";
import { ReturnAllEventsController } from "./AllEvents.controller"
import { PrismaService } from "src/database";
import { ReturnAllEventsImplementation } from "src/repositories/anyone/implementations/ReturnAllEvents.service";
import { ReturnAllEventsInMemory } from "src/repositories/anyone/implementations/in-memory-database/ReturnAllEvents.memory";
import { ReturnAllEventsService } from "./AllEvents.service";

describe('Aqui será retornado todos os eventos cadastrados (Não passados)', ()=>{
    let controller:ReturnAllEventsController;
    beforeAll(async()=>{
        const moduleRef = await Test.createTestingModule({
            controllers: [ReturnAllEventsController],
            providers: [
                PrismaService,
                ReturnAllEventsImplementation,
                ReturnAllEventsInMemory,
                ReturnAllEventsService,
            ],
        }).compile();
        controller = moduleRef.get<ReturnAllEventsController>(ReturnAllEventsController);
    });
    it('Deveria retornar os eventos filtrados por não passados', async()=>{
        const execute = await controller.returnEventsFiltred(true);
        expect(execute).toHaveLength(2);
    });
});
