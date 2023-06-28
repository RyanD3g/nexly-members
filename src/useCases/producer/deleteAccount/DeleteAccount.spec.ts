import { Test } from "@nestjs/testing";
import { DeleteAccountController } from "./DeleteAccount.controller";
import { PrismaService } from "../../../database";
import { DeleteAccountImplementation } from "../../../repositories/Producer/implementations/DeleteAccount.service";
import { DeleteAccountInMemory } from "../../../repositories/Producer/implementations/in-memory-database/deleteAccount.memory";
import { DeleteAccountService } from "./DeleteAccount.service";

describe('Aqui será testado funções de deleção de contas do produtor', ()=>{
    let deleteAccount:DeleteAccountController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [DeleteAccountController],
            providers:[
                PrismaService,
                DeleteAccountImplementation,
                DeleteAccountInMemory,
                DeleteAccountService,
            ],
        }).compile();
        deleteAccount = moduleRef.get<DeleteAccountController>(DeleteAccountController);
    });
    describe('Agendando deleção de conta', ()=>{
        it('Deveria agendar normalmente uma deleção de conta', async()=>{
            const appointment = await deleteAccount.handleDelete({
                producerId:'123'
            }, true);
            expect(appointment.delDate).not.toBeNull;
        });
        it('Deveria dar erro por conta já agendada', async()=>{
            const appointment = await deleteAccount.handleDelete({
                producerId:'321'
            }, true);
            expect(appointment).toThrow;
        });
    });
});
