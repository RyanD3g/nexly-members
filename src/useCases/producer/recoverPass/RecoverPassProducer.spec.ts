import { Test } from "@nestjs/testing";
import { RecoverPassProducerController } from "./RecoverPassProducer.controller";
import { PrismaService } from "../../../database";
import { RecoverPassProducerImplementation } from "../../../repositories/Producer/implementations/RecoverPass.service";
import { RecoverPassProducerService } from "./RecoverPassProducer.service";
import { MailProvider } from "../../../providers/implementations/Mail.provider";
import { RegisterProducerImplementation } from "../../../repositories/Producer/implementations/RegisterProducer.service";

describe('Should recover pass with code', ()=>{
    let RecoverController:RecoverPassProducerController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [RecoverPassProducerController],
            providers: [
                PrismaService,
                RecoverPassProducerImplementation,
                RecoverPassProducerService,
                MailProvider,
                RegisterProducerImplementation,
            ],
        }).compile();

        RecoverController = moduleRef.get<RecoverPassProducerController>(RecoverPassProducerController);
    });

    it('Should send code in email of Producer', async()=>{
        const mocked = jest.spyOn(RecoverController, 'handle_recover').mockResolvedValue({ sended:true });
        const handle_code = await RecoverController.handle_recover(
            {
                email: 'test@test.com',
            }
        );
        expect(handle_code).toEqual({ sended:true });
    });

    it('Should see a error', async()=>{
        const mocked = jest.spyOn(RecoverController, 'handle_recover').mockResolvedValue(()=> { throw new Error('Erro mockado!!') });
        const handle_code = await RecoverController.handle_recover(
            {
                email: 'test@error.com',
            }
        );
        expect(handle_code).toThrow;
    });
});
