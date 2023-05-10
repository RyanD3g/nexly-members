import { Test } from "@nestjs/testing";
import { ValidateCodeAndDateController } from "./ValidateCode.controller";
import { PrismaService } from "../../../database";
import { ValidateCodeAndDateService } from "./ValidateCode.service";
import { ValidateCodeImplementation } from "../../../repositories/Producer/implementations/ValidateCode.service";

describe('Should validate code sended in email',()=>{
    let validateController:ValidateCodeAndDateController;
    let prisma:PrismaService;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [ValidateCodeAndDateController],
            providers: [
                PrismaService,
                ValidateCodeAndDateService,
                ValidateCodeImplementation,
            ],
        }).compile();
    
        validateController = moduleRef.get<ValidateCodeAndDateController>(ValidateCodeAndDateController);
        prisma = moduleRef.get<PrismaService>(PrismaService);
    });

    describe('Should validate', ()=>{
        it('Should go smoothly', async()=>{
            const mocked = jest.spyOn(validateController, 'handle_validate').mockResolvedValue({ validated:true });
            const validated = await validateController.handle_validate({
                code:'879065'
            });
            expect(validated).not.toThrow;
            expect(validated.validated).toBeDefined();
        });

        it('Not Should go smoothly', async()=>{
            const mocked = jest.spyOn(validateController, 'handle_validate').mockResolvedValue(()=> { throw new Error('Erro mockado!!') });
            const validated = await validateController.handle_validate({
                code:'dsfgsgfdhgfjghkhjjhk'
            });
            expect(validated).toThrow;
        });
    });
});
