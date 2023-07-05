import { PrismaService } from "../../../database";
import { Test } from "@nestjs/testing";
import { ChangeFavoriteController } from "./ChangeFavorite.controller";
import { ChangeFavoriteService } from "./ChangeFavorite.service";
import { FavoriteLessonImplementation } from "../../../repositories/Student/implementations/FavoriteLesson.service";
import { FavoriteLessonInMemory } from "../../../repositories/Student/implementations/in-memory-database/favoriteLesson.memory";

describe('Should to favorite a lesson', ()=>{
    let favoriteLessonControllerTest:ChangeFavoriteController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [ChangeFavoriteController],
            providers: [
                PrismaService,
                ChangeFavoriteService,
                FavoriteLessonImplementation,
                FavoriteLessonInMemory,
            ],
        }).compile();

        favoriteLessonControllerTest = moduleRef.get<ChangeFavoriteController>(ChangeFavoriteController);
    });

    describe('Should to favorite a lesson', ()=>{
        it('should be favorited', async()=>{
            const create = await favoriteLessonControllerTest.change_favorite({
                lessonId:'123',
                lessonName:'345',
                studentId:'123',
            }, true);
            
            expect(create).toEqual({ favorited:true });
        });
    });
});
