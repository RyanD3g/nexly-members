import { Test } from "@nestjs/testing";
import { PrismaService } from "../../../database";
import { AddressUpdateController } from "./UpdateAddress.controller";
import { UpdateAddressImplementation } from "../../../repositories/Producer/implementations/UpdateAddress.service";
import { UpdateAddressService } from "./UpdateAddress.service";
import { IsJwtMiddleware } from "../../../middlewares/isJwt.middleware";

describe('Should to create data to complete the register', ()=>{
    let updateAddressController:AddressUpdateController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [AddressUpdateController],
            providers: [
                PrismaService,
                UpdateAddressImplementation,
                UpdateAddressService,
                IsJwtMiddleware,
            ],
        }).compile();

        updateAddressController = moduleRef.get<AddressUpdateController>(AddressUpdateController);
    });

    describe('Should to update data', ()=>{
        it('Should to create', async ()=>{
            const spy = jest.spyOn(updateAddressController, 'updateAddress').mockResolvedValue({ updated:true })
            const updated = await updateAddressController.updateAddress({
                city:'Teste de cidade ',
                codeStreet:'Teste de Cep',
                complement:'Teste de complemento',
                number:'Teste de número',
                street:'Teste de rua',
                uf:'Teste de estado',
                addressId:'Teste de identificador de endereço',
                producerId:'Teste de identificador'
            });
            expect(updated.updated).toBeDefined();
        });
    });
});
