import { Test } from "@nestjs/testing";
import { CreatePostProducerController } from "./CreatePost.controller";
import { PrismaService } from "../../../database";
import { CreateAPostProducerService } from "./CreatePost.service";
import { CreateAPosProducertInMemory } from "../../../repositories/Producer/implementations/in-memory-database/createPost.memory";
import { CreatePostProducerImplementation } from "../../../repositories/Producer/implementations/CreatePost.service";

describe('Aqui será testado as funções de criação de post do produtor', ()=>{
    let createPostController:CreatePostProducerController;

    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            controllers: [CreatePostProducerController],
            providers: [
                PrismaService,
                CreateAPostProducerService,
                CreatePostProducerImplementation,
                CreateAPosProducertInMemory,
            ],
        }).compile();

        createPostController = moduleRef.get<CreatePostProducerController>(CreatePostProducerController);
    });

    it('Deveria criar um post normalmente', async ()=>{
        const createdPost = await createPostController.createPost({
            producerId:'123',
            contentPost:'Conteudo tal',
            urlPhotoPost:'Teste de url',
        }, true);
        console.log(createdPost)
        expect(createdPost).toHaveLength(1);
    });
});
