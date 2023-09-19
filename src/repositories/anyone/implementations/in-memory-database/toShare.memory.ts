import { Injectable } from "@nestjs/common";
import { AToSharePost } from "../../IToShare.anyone";
import { Posts } from "@prisma/client";
import { IToShareDTO } from "src/useCases/anyone/toShare/ToShare.DTO";

@Injectable()
export class ToShareInMemory implements AToSharePost {
    private PostInMemory: Posts[] = [
        {
            id:'123',
            contentPost:'Teste de conteudo de post',
            momentPost:'Teste de momento de postagem de post',
            share:567,
            urlPhotoPost:'Teste de url',
            producerId:'670',
            studentId:null,
            createdAt:new Date(),
            updatedAt:new Date(),
        },
    ];
    sharePost(data: IToShareDTO): Posts[] {
        const returnPostById = this.PostInMemory.filter(e => e.id === data.postId);
        return returnPostById;
    };
};
