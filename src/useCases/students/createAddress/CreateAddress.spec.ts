import { Test } from "@nestjs/testing";
import { AddressCreateController } from "./CreateAddress.controller";
import { PrismaService } from "../../../database";
import { CreateAddressImplementation } from "../../../repositories/Student/implementations/CreateAddress.service";
import { CreateAddressService } from "./CreateAddress.service";

describe('Should to create data to complete the register', ()=>{
    let createAddressController:AddressCreateController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [AddressCreateController],
            providers: [
                PrismaService,
                CreateAddressImplementation,
                CreateAddressService,
            ],
        }).compile();

        createAddressController = moduleRef.get<AddressCreateController>(AddressCreateController);
    });

    describe('Should to create data to complete the register', ()=>{
        it('Should to create', async ()=>{
            const spy = jest.spyOn(createAddressController, 'createAddress').mockResolvedValue({ created:true })
            const created = await createAddressController.createAddress({
                city:'Teste de cidade ',
                codeStreet:'Teste de Cep',
                complement:'Teste de complemento',
                number:'Teste de número',
                street:'Teste de rua',
                studentId:'Teste de identificador',
                uf:'Teste de estado',
            });
            expect(created);
        });
    });
});
