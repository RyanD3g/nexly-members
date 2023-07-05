import { Body, Controller, Put, Request, UploadedFile, UseInterceptors } from "@nestjs/common";
import { ProfileImageProducerService } from "./ProfileImage.service";
import { CustomRequest } from "src/interfaces/Request.interface";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('upload')
export class ProfileImageProducerController {
    constructor(
        private service:ProfileImageProducerService,
    ){};

    @Put('image/profile/producer')
    @UseInterceptors(FileInterceptor('file'))
    async handle_upload(@UploadedFile() file,  @Request() req?:CustomRequest){
        try {
            const uploaded_sucesfully = await this.service.uploadedPhotos({
                producerId:req.producerId,
                urlPhoto:file.location,
            });
            return uploaded_sucesfully;
        } catch (error) {
            return error;
        };
    };
};
