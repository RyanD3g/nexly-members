import { Test } from "@nestjs/testing";
import { CreatePostController } from "./CreatePost.controller";
import { PrismaService } from "../../../database";
import { CreateAPostInMemory } from "../../../repositories/Student/implementations/in-memory-database/createAPost.memory";
import { CreatePostImplementation } from "../../../repositories/Student/implementations/CreatePost.service";
import { CreateAPostService } from "./CreatePost.service";

describe('Aqui será testado as funções de criação de post', ()=>{
    let createPostController:CreatePostController;

    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            controllers: [CreatePostController],
            providers: [
                PrismaService,
                CreateAPostInMemory,
                CreatePostImplementation,
                CreateAPostService,
            ],
        }).compile();

        createPostController = moduleRef.get<CreatePostController>(CreatePostController);
    });

    it('Deveria criar um post normalmente', async ()=>{
        const createdPost = await createPostController.createPost({
            studentId:'123',
            contentPost:'Conteudo tal',
            urlPhotoPost:'Teste de url',
        }, true);
        expect(createdPost).toHaveLength(1);
    });
});
