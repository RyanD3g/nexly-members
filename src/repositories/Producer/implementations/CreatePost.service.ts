import { Injectable } from "@nestjs/common";
import { Producer, Student } from "@prisma/client";
import { PrismaService } from "../../../database";
import { ACreatePost } from "../../../repositories/anydeclaration/ICreatePost";
import { ICreatePostProducerDTO } from "../../../useCases/producer/createPost/CreatePost.DTO";

@Injectable()
export class CreatePostProducerImplementation implements ACreatePost {
    constructor(
        private prisma:PrismaService,
    ){};
    async create(data:ICreatePostProducerDTO): Promise<Producer> {
        const createThatPost = await this.prisma.producer.update({
            where:{ id:data.producerId },
            data:{
                posts:{
                    create:{
                        contentPost:data.contentPost,
                        momentPost:data.momentPost,
                        urlPhotoPost:data.urlPhotoPost,
                        studentId:null,                   
                    }
                }
            },
        });

        return createThatPost;
    };
};
