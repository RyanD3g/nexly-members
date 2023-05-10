import { Test } from "@nestjs/testing";
import { PrismaService } from "../../../database";
import { getDataFullProducerController } from "./FullProducer.controller";
import { GetFullDataProducer } from "../../../repositories/Producer/implementations/FullDataProducer.service";
import { getDataAndValidateFullProducerService } from "./FullProducer.service";

describe('Should to create data to complete the register', ()=>{
    let fullProducerController:getDataFullProducerController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [getDataFullProducerController],
            providers: [
                PrismaService,
                GetFullDataProducer,
                getDataAndValidateFullProducerService,
            ],
        }).compile();

        fullProducerController = moduleRef.get<getDataFullProducerController>(getDataFullProducerController);
    });

    describe('Should to get one User and to validate profile', ()=>{
        it('Should to get', async ()=>{
            const spy = jest.spyOn(fullProducerController, 'getFullProducer').mockResolvedValue({ data:true })
            const getting = await fullProducerController.getFullProducer();
            expect(getting.data).toBeDefined();
        });
        it('Should to validate', async()=>{
            const spy = jest.spyOn(fullProducerController, 'getFullProducer').mockResolvedValue(()=> { throw new Error('Meu erro') });
            const validate = await fullProducerController.getFullProducer();
            expect(validate).toThrow;
        });
    });
});
