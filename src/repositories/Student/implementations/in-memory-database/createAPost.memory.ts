import { Injectable } from "@nestjs/common";
import { Posts } from "@prisma/client";
import { ACreatePost } from "../../../../repositories/anydeclaration/ICreatePost";
import { ICreatePostDTO } from "../../../../useCases/students/createPost/CreatePost.DTO";
import * as dayjs from 'dayjs';

@Injectable()
export class CreateAPostInMemory implements ACreatePost {
    private postModel: Posts[] = [];
    create(data:ICreatePostDTO): Posts[] {
        const createPost = this.postModel.push(
            {
                id:'123',
                likes:null,
                createdAt:new Date(),
                updatedAt:new Date(),
                share:null,
                urlPhotoPost:data.urlPhotoPost,
                contentPost:data.contentPost,
                producerId:null,
                momentPost:data.momentPost,
                studentId:data.studentId, 
            },
        );

        return this.postModel;
    };
};
