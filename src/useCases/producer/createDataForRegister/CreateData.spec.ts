import { Test } from "@nestjs/testing";
import { CreateDataForProducerController } from "./CreateData.controller";
import { PrismaService } from "../../../database";
import { CreateDataForProducerService } from "./CreateData.service";
import { CreateDataProducerImplementation } from "../../../repositories/Producer/implementations/CreateDataProducer.service";

describe('Should to create data to complete the register', ()=>{
    let createDatController:CreateDataForProducerController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [CreateDataForProducerController],
            providers: [
                PrismaService,
                CreateDataForProducerService,
                CreateDataProducerImplementation,
            ],
        }).compile();

        createDatController = moduleRef.get<CreateDataForProducerController>(CreateDataForProducerController);
    });

    describe('Should to create data to complete the register', ()=>{
        it('Should to create', async ()=>{
            const spy = jest.spyOn(createDatController, 'handle_create').mockResolvedValue({ created:true })
            const created = await createDatController.handle_create({
                identity:'Teste-Teste-Teste-Teste-Teste-Teste',
                lastname:'Teste',
                name:'Teste',
                phone_number:'Teste',
                sex:'Masculino',
                producerId:'24bbab80-9236-431c-85a0-bee140922ef4'
            });
            expect(created.created).toBeDefined();
        });
    });
});
