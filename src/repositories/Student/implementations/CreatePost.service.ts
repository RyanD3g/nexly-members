import { Injectable } from "@nestjs/common";
import { Student } from "@prisma/client";
import { PrismaService } from "../../../database";
import { ACreatePost } from "../../../repositories/anydeclaration/ICreatePost";
import { ICreatePostDTO } from "../../../useCases/students/createPost/CreatePost.DTO";

@Injectable()
export class CreatePostImplementation implements ACreatePost {
    constructor(
        private prisma:PrismaService,
    ){};
    async create(data:ICreatePostDTO): Promise<Student> {
        const createThatPost = await this.prisma.student.update({
            where:{ id:data.studentId },
            data:{
                posts:{
                    create:{
                        contentPost:data.contentPost,
                        momentPost:data.momentPost,
                        urlPhotoPost:data.urlPhotoPost,
                        producerId:null,                   
                    }
                }
            },
        });

        return createThatPost;
    };
};
