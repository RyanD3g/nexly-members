import { PrismaService } from "../../../database";
import { Test } from "@nestjs/testing";
import { MyNotificationsController } from "./MyNotifications.controller";
import { MyNotificationsService } from "./MyNotifications.service";
import { GetMyNotificationsImplementations } from "../../../repositories/Student/implementations/GetMyNotifications.service";
import { GetMyNotificationsInMemory } from "../../../repositories/Student/implementations/in-memory-database/getMyNotifications.memory";

describe('Should to get data about notifications', ()=>{
    let ControllerTest:MyNotificationsController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [MyNotificationsController],
            providers: [
                PrismaService,
                MyNotificationsService,
                GetMyNotificationsImplementations,
                GetMyNotificationsInMemory,
            ],
        }).compile();

        ControllerTest = moduleRef.get<MyNotificationsController>(MyNotificationsController);
    });

    describe('Should to get data about notifications of users', ()=>{
        it('should to get notifications', async()=>{
            const getting = await ControllerTest.geted({
                studentId:'123',
            }, true);
            
            expect(getting[0].content).toBeDefined();
        });
    });
});
