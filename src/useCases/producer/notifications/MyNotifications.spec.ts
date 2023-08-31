import { NotificationsController } from "./MyNotifications.controller";
import { PrismaService } from "../../../database";
import { Test } from "@nestjs/testing";
import { NotificationsProducerImplementation } from "../../../repositories/Producer/implementations/Notifications.service";
import { NotificationsProducerInMemory } from "../../../repositories/Producer/implementations/in-memory-database/getNotifications.memory";
import { NotificationsService } from "./MyNotifications.service";

describe('Testando as funções de leitura de notificação', ()=>{
    let notificationsControllerTest:NotificationsController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [NotificationsController],
            providers: [
                PrismaService,
                NotificationsProducerImplementation,
                NotificationsProducerInMemory,
                NotificationsService,
            ],
        }).compile();

        notificationsControllerTest = moduleRef.get<NotificationsController>(NotificationsController);
    });

    describe('Lendo notificações', ()=>{
        it('Deve ler as notificações', async()=>{
            const read = await notificationsControllerTest.notifications({ producerId:'456' }, true);
            expect(read).toHaveLength(1);
        });
    });
});
