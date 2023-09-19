import { Body, Controller, Post, Request, UploadedFile, UseInterceptors } from "@nestjs/common";
import { CreateAPostProducerService } from "./CreatePost.service";
import { ICreatePostProducerDTO } from "./CreatePost.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('create')
export class CreatePostProducerController {
    constructor(
        private service:CreateAPostProducerService,
    ){};

    @Post('post/producer')
    @UseInterceptors(FileInterceptor('file'))
    async createPost(
        @Body() body:ICreatePostProducerDTO,
        isTest:boolean = false,
        @Request() req?:CustomRequest,
        @UploadedFile() file?,
    ){
        try {
            const created = await this.service.create({
                producerId:req?.producerId || body.producerId,
                contentPost:body?.contentPost || undefined,
                momentPost:body?.momentPost || undefined,
                urlPhotoPost:file?.location || body?.urlPhotoPost,
            }, isTest);

            return created;
        } catch (error) {
            return error;
        };
    }
};
