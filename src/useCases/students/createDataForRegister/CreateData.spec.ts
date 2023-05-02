import { Test } from "@nestjs/testing";
import { CreateDataForStudentsController } from "./CreateData.controller";
import { PrismaService } from "../../../database";
import { CreateDataForStudentsService } from "./CreateData.service";
import { CreateDataStudentImplementation } from "../../../repositories/Student/implementations/CreateDataStudent.service";

describe('Should to create data to complete the register', ()=>{
    let createDatController:CreateDataForStudentsController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [CreateDataForStudentsController],
            providers: [
                PrismaService,
                CreateDataForStudentsService,
                CreateDataStudentImplementation,
            ],
        }).compile();

        createDatController = moduleRef.get<CreateDataForStudentsController>(CreateDataForStudentsController);
    });

    describe('Should to create data to complete the register', ()=>{
        it('Should to create', async ()=>{
            const spy = jest.spyOn(createDatController, 'handle_create').mockResolvedValue({ created:true })
            const created = await createDatController.handle_create({
                bio: 'Lorem ipsum',
                cpf:'Teste-Teste-Teste-Teste-Teste-Teste',
                lastname:'Teste',
                name:'Teste',
                phone_number:'Teste',
                sex:'Masculino',
                studentId:'24bbab80-9236-431c-85a0-bee140922ef4'
            });
            expect(created.created).toBeDefined();
        });
    });
});
