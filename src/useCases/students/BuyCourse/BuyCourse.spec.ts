import { PrismaService } from "../../../database";
import { BuyCourseController } from "./BuyCourse.controller";
import { BuyCourseImplementation } from "../../../repositories/Student/implementations/BuyCourse.service";
import { BuyCourseService } from "./BuyCourse.service";
import { BuyCourseInMemory } from "../../../repositories/Student/implementations/in-memory-database/buyCourse.memory";
import { Test } from "@nestjs/testing";
import { IsDeleteCourseImplementation } from "../../../repositories/anyone/implementations/IsDeleteCourse.service";

describe('Should buy a course', ()=>{
    let createBuyControllerTest:BuyCourseController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [BuyCourseController],
            providers: [
                PrismaService,
                BuyCourseImplementation,
                BuyCourseService,
                BuyCourseInMemory,
                IsDeleteCourseImplementation,
            ],
        }).compile();

        createBuyControllerTest = moduleRef.get<BuyCourseController>(BuyCourseController);
    });

    describe('Should buy a course', ()=>{
        it('should be buyed', async()=>{
            const create = await createBuyControllerTest.createChecoutForBuyCourse(true,{
                courseId:'123',
                studentId:'123'
            });
            
            expect(create).toEqual({ buyed:true });
        });
    });
});
