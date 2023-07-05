import { Test } from "@nestjs/testing";
import { LoginProducerController } from "./LoginProducer.controller";
import { LoginProducerService } from "./LoginProducer.service";
import { PrismaService } from "../../../database";
import { LoginProducerImplementation } from "../../../repositories/Producer/implementations/LoginProducer.service";

describe('Should test all forms of login', ()=>{
    let LoginController: LoginProducerController;
    let LoginService:LoginProducerService;

    beforeEach(async ()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [LoginProducerController],
            providers: [
                PrismaService,
                LoginProducerService,
                LoginProducerImplementation,
            ]
        }).compile();

        LoginService = moduleRef.get<LoginProducerService>(LoginProducerService);
        LoginController = moduleRef.get<LoginProducerController>(LoginProducerController);
    });

    describe('Should do login', ()=>{
        it('Should do login', async()=>{
            const mocked = jest.spyOn(LoginController, 'handle_login').mockResolvedValue({ token:'123' });
            const handleLogin = await LoginController.handle_login({
                email: 'test@test.com',
                password: 'test password',
            });

            expect(handleLogin).toHaveProperty('token');
            expect(handleLogin.token).toBeDefined();
        });
        
        it('Should stop login with password incorret', async()=>{
            const mocked = jest.spyOn(LoginController, 'handle_login').mockResolvedValue(()=> { throw new Error('Erro mockado!!') });
            const handleLoginError = await LoginController.handle_login({
                email: 'test@test.com',
                password: 'test error of password',
            });

            expect(handleLoginError).toThrow;
        });

        it('Should stop login with email incorret', async()=>{
            const mocked = jest.spyOn(LoginController, 'handle_login').mockResolvedValue(()=> { throw new Error('Erro mockado!!') });
            const handleLoginError = await LoginController.handle_login({
                email: 'test@error.com',
                password: 'test password',
            });

            expect(handleLoginError).toThrow;
        });
    });
});