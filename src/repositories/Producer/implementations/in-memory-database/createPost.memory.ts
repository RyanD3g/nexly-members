import { Injectable } from "@nestjs/common";
import { Posts } from "@prisma/client";
import { ACreatePost } from "../../../../repositories/anydeclaration/ICreatePost";
import { ICreatePostProducerDTO } from "../../../../useCases/producer/createPost/CreatePost.DTO";
import * as dayjs from 'dayjs';

@Injectable()
export class CreateAPosProducertInMemory implements ACreatePost {
    private postModel: Posts[] = [];
    create(data:ICreatePostProducerDTO): Posts[] {
        const createPost = this.postModel.push(
            {
                id:'123',
                likes:null,
                createdAt:new Date(),
                updatedAt:new Date(),
                share:null,
                urlPhotoPost:data.urlPhotoPost,
                contentPost:data.contentPost,
                producerId:data.producerId,
                momentPost:`${dayjs().format('YYYY-MM-DD')} - ${dayjs().format('HH:mm:ss')}`,
                studentId:null, 
            },
        );

        return this.postModel;
    };
};
