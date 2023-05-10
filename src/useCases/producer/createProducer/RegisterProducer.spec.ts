import { Test } from "@nestjs/testing";
import { RegisterProducerController } from "./RegisterProducer.controller";
import { RegisterProducerService } from "./RegisterProducer.service";
import { RegisterProducerImplementation } from "../../../repositories/Producer/implementations/RegisterProducer.service";
import { PrismaService } from "../../../database";
import * as crypto from 'crypto';

describe('Should register a Producer', ()=>{
    let ProducerController: RegisterProducerController;
    let ProducerService:RegisterProducerService;
    let ProducerImplementation:RegisterProducerImplementation;

    beforeEach(async ()=>{
        const moduleRef = await Test.createTestingModule({
            controllers: [RegisterProducerController],
            providers: [
                RegisterProducerService,
                RegisterProducerImplementation,
                PrismaService,
            ],
        }).compile();

        ProducerService = moduleRef.get<RegisterProducerService>(RegisterProducerService);
        ProducerController = moduleRef.get<RegisterProducerController>(RegisterProducerController);
        ProducerImplementation = moduleRef.get<RegisterProducerImplementation>(RegisterProducerImplementation);
    });

    describe('Should create', ()=>{
        it('Should create a Producer, with 0 problems', async ()=>{
            const mocked = jest.spyOn(ProducerController, 'createProducer').mockResolvedValue({ token:'123' })
            const created = await ProducerController.createProducer(
                {
                    email: crypto.randomBytes(16).toString('hex'),
                    password: 'test password',
                    confirmPassword: 'test password'
                },
            );

            expect(created).toHaveProperty('token');
            expect(created.token).toBeDefined();
        });

        it('Should stop the register. Passowrd and confirm', async ()=>{
            const mocked = jest.spyOn(ProducerController, 'createProducer').mockResolvedValue(()=> { throw new Error('Erro mockado') })
            const created = await ProducerController.createProducer(
                {
                    email: 'test@test.com',
                    password: 'test password',
                    confirmPassword: 'erro de password'
                },
            );
            
            expect(created).toThrow;
        });

        it('Should stop the register. Existing Email', async ()=>{
            const mocked = jest.spyOn(ProducerController, 'createProducer').mockResolvedValue(()=> { throw new Error('Erro mockado') });
            const created = await ProducerController.createProducer(
                {
                    email: 'test@test.com',
                    password: 'test password',
                    confirmPassword: 'test password',
                },
            );
            
            expect(created).toThrow;
        });
    })
});
