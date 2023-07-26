import { Body, Controller, Post, Request, UploadedFile, UseInterceptors } from "@nestjs/common";
import { CreateAPostService } from "./CreatePost.service";
import { ICreatePostDTO } from "./CreatePost.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('create')
export class CreatePostController {
    constructor(
        private service:CreateAPostService,
    ){};

    @Post('post/student')
    @UseInterceptors(FileInterceptor('file'))
    async createPost(
        @Body() body:ICreatePostDTO,
        isTest:boolean = false,
        @Request() req?:CustomRequest,
        @UploadedFile() file?,
    ){
        try {
            const created = await this.service.create({
                studentId:req?.studentId || body.studentId,
                contentPost:body?.contentPost || undefined,
                momentPost:body?.momentPost || undefined,
                urlPhotoPost:file || body?.urlPhotoPost,
            }, isTest);

            return created;
        } catch (error) {
            return error;
        };
    }
};
