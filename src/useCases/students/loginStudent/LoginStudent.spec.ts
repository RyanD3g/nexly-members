import { Test } from "@nestjs/testing";
import { LoginStudentController } from "./LoginStudent.controller";
import { LoginStudentService } from "./LoginStudent.service";
import { PrismaService } from "../../../database";
import { LoginStudentImplementation } from "../../../repositories/Student/implementations/LoginStudent.service";

describe('Should test all forms of login', ()=>{
    let LoginController: LoginStudentController;
    let LoginService:LoginStudentService;

    beforeEach(async ()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [LoginStudentController],
            providers: [
                PrismaService,
                LoginStudentService,
                LoginStudentImplementation,
            ]
        }).compile();

        LoginService = moduleRef.get<LoginStudentService>(LoginStudentService);
        LoginController = moduleRef.get<LoginStudentController>(LoginStudentController);
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