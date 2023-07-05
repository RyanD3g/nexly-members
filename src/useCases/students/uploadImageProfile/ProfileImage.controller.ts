import { Body, Controller, Put, Request, UploadedFile, UseInterceptors } from "@nestjs/common";
import { ProfileImageStudentService } from "./ProfileImage.service";
import { CustomRequest } from "src/interfaces/Request.interface";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('upload')
export class ProfileImageStudentController {
    constructor(
        private service:ProfileImageStudentService,
    ){};

    @Put('image/profile/student')
    @UseInterceptors(FileInterceptor('file'))
    async handle_upload(@UploadedFile() file,  @Request() req?:CustomRequest){
        try {
            const uploaded_sucesfully = await this.service.uploadedPhotos({
                studentId:req.studentId,
                urlPhoto:file.location,
            });
            return uploaded_sucesfully;
        } catch (error) {
            return error;
        };
    };
};
