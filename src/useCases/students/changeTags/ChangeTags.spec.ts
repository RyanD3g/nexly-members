import { Test } from "@nestjs/testing";
import { ChangeTagsController } from "./ChangeTags.controller";
import { PrismaService } from "../../../database";
import { ChangeTagImplementation } from "../../../repositories/Student/implementations/ChangeTag.service";
import { ChangeTagsService } from "./ChangeTags.service";
import { IsJwtMiddleware } from "../../../middlewares/isJwt.middleware";

describe('Should change tags', ()=>{
    let changeController:ChangeTagsController;
    let changeService:ChangeTagsService;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [ChangeTagsController],
            providers: [
                PrismaService,
                ChangeTagImplementation,
                ChangeTagsService,
                IsJwtMiddleware,
            ],
        }).compile();

        changeController = moduleRef.get<ChangeTagsController>(ChangeTagsController);
        changeService = moduleRef.get<ChangeTagsService>(ChangeTagsService);
    });

    it('Deve criar tags normalmente', async ()=>{
        const mocked = jest.spyOn(changeController, 'handle_created').mockResolvedValue({ created:true });
        const createdTags = await changeController.handle_created({
            tagname:[{
                categoryName:'My tag',
            }],
            studentId:'24bbab80-9236-431c-85a0-bee140922ef4',
        });

        expect(createdTags.created).toBeDefined()
    });
});
