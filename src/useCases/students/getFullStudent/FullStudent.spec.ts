import { Test } from "@nestjs/testing";
import { PrismaService } from "../../../database";
import { getDataFullStudentController } from "./FullStudent.controller";
import { GetFullDataStudent } from "../../../repositories/Student/implementations/FullDataStudent.service";
import { getDataAndValidateFullStudentService } from "./FullStudent.service";

describe('Should to create data to complete the register', ()=>{
    let fullStudentController:getDataFullStudentController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [getDataFullStudentController],
            providers: [
                PrismaService,
                GetFullDataStudent,
                getDataAndValidateFullStudentService,
            ],
        }).compile();

        fullStudentController = moduleRef.get<getDataFullStudentController>(getDataFullStudentController);
    });

    describe('Should to get one User and to validate profile', ()=>{
        it('Should to get', async ()=>{
            const spy = jest.spyOn(fullStudentController, 'getFullStudent').mockResolvedValue({ data:true })
            const getting = await fullStudentController.getFullStudent();
            expect(getting.data).toBeDefined();
        });
        it('Should to validate', async()=>{
            const spy = jest.spyOn(fullStudentController, 'getFullStudent').mockResolvedValue(()=> { throw new Error('Meu erro') });
            const validate = await fullStudentController.getFullStudent();
            expect(validate).toThrow;
        });
    });
});
