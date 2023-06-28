import { Test } from "@nestjs/testing";
import { DeleteAccountStudentController } from "./DeleteAccount.controller";
import { PrismaService } from "../../../database";
import { DeleteAccountStudentService } from "./DeleteAccount.service";
import { DeleteAccountStudentImplementation } from "../../../repositories/Student/implementations/DeleteAccount.service";
import { DeleteAccountStudentInMemory } from "../../../repositories/Student/implementations/in-memory-database/deleteAccount.memory";

describe('Aqui será testado funções de deleção de contas do produtor', ()=>{
    let deleteAccount:DeleteAccountStudentController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [DeleteAccountStudentController],
            providers:[
                PrismaService,
                DeleteAccountStudentImplementation,
                DeleteAccountStudentInMemory,
                DeleteAccountStudentService,
    ],
        }).compile();
        deleteAccount = moduleRef.get<DeleteAccountStudentController>(DeleteAccountStudentController);
    });
    describe('Agendando deleção de conta', ()=>{
        it('Deveria agendar normalmente uma deleção de conta', async()=>{
            const appointment = await deleteAccount.handleDelete({
                studentId:'123'
            }, true);
            expect(appointment.delDate).not.toBeNull;
        });
        it('Deveria dar erro por conta já agendada', async()=>{
            const appointment = await deleteAccount.handleDelete({
                studentId:'321'
            }, true);
            expect(appointment).toThrow;
        });
    });
});
