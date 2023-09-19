import { Test } from "@nestjs/testing";
import { DeletePostController } from "./DeletePost.controller";
import { PrismaService } from "../../../database";
import { DeletePostImplementation } from "../../../repositories/anyone/implementations/DeletePost.service";
import { DeletePostInMemory } from "../../../repositories/anyone/implementations/in-memory-database/deletePost.memory";
import { DeletePostService } from "./DeletePost.service";

describe('Aqui será testado as funções de deleção de um post', ()=>{
    let controller:DeletePostController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            controllers: [DeletePostController],
            providers:[
                PrismaService,
                DeletePostImplementation,
                DeletePostInMemory,
                DeletePostService,
            ],
        }).compile();

        controller = moduleRef.get<DeletePostController>(DeletePostController);
    });

    it('Deveria retornar um erro por não encontrar o post', async ()=>{
        const sendInfo = await controller.handle_deletePost({
            postId:'67890',
        }, true);
        expect(sendInfo).toThrow;
    });

    it('Deveria deletar o post normalmente', async ()=>{
        const sendInfo = await controller.handle_deletePost({
            postId:'123',
        }, true);
        console.log(sendInfo);
        expect(sendInfo).toHaveLength(1);
    });
});
