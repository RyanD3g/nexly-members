import { Test } from "@nestjs/testing";
import { RegisterStudentController } from "./RegisterStudent.controller";
import { RegisterStudentService } from "./RegisterStudent.service";
import { RegisterStudentImplementation } from "../../../repositories/Student/implementations/RegisterStudent.service";
import { PrismaService } from "../../../database";
import * as crypto from 'crypto';

describe('Should register a Student', ()=>{
    let StudentController: RegisterStudentController;
    let StudentService:RegisterStudentService;
    let StudentImplementation:RegisterStudentImplementation;

    beforeEach(async ()=>{
        const moduleRef = await Test.createTestingModule({
            controllers: [RegisterStudentController],
            providers: [
                RegisterStudentService,
                RegisterStudentImplementation,
                PrismaService,
            ],
        }).compile();

        StudentService = moduleRef.get<RegisterStudentService>(RegisterStudentService);
        StudentController = moduleRef.get<RegisterStudentController>(RegisterStudentController);
        StudentImplementation = moduleRef.get<RegisterStudentImplementation>(RegisterStudentImplementation);
    });

    describe('Should create', ()=>{
        it('Should create a Student, with 0 problems', async ()=>{
            const mocked = jest.spyOn(StudentController, 'createStudent').mockResolvedValue({ token:'123' })
            const created = await StudentController.createStudent(
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
            const mocked = jest.spyOn(StudentController, 'createStudent').mockResolvedValue(()=> { throw new Error('Erro mockado') })
            const created = await StudentController.createStudent(
                {
                    email: 'test@test.com',
                    password: 'test password',
                    confirmPassword: 'erro de password'
                },
            );
            
            expect(created).toThrow;
        });

        it('Should stop the register. Existing Email', async ()=>{
            const mocked = jest.spyOn(StudentController, 'createStudent').mockResolvedValue(()=> { throw new Error('Erro mockado') });
            const created = await StudentController.createStudent(
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
