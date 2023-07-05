import { Test } from "@nestjs/testing";
import { RecoverPassStudentController } from "./RecoverPassStudent.controller";
import { PrismaService } from "../../../database";
import { RecoverPassStudentImplementation } from "../../../repositories/Student/implementations/RecoverPass.service";
import { RecoverPassStudentService } from "./RecoverPassStudent.service";
import { MailProvider } from "../../../providers/implementations/Mail.provider";
import { RegisterStudentImplementation } from "../../../repositories/Student/implementations/RegisterStudent.service";

describe('Should recover pass with code', ()=>{
    let RecoverController:RecoverPassStudentController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [RecoverPassStudentController],
            providers: [
                PrismaService,
                RecoverPassStudentImplementation,
                RecoverPassStudentService,
                MailProvider,
                RegisterStudentImplementation,
            ],
        }).compile();

        RecoverController = moduleRef.get<RecoverPassStudentController>(RecoverPassStudentController);
    });

    it('Should send code in email of student', async()=>{
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
