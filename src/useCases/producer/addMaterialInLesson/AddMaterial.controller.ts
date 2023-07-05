import { Controller, Param, Put, UploadedFile, UseInterceptors } from "@nestjs/common";
import { AddMaterialService } from "./AddMaterial.service";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('material')
export class AddMaterialController {
    constructor(
        private service:AddMaterialService,
    ){};

    @Put('add/:lessonId')
    @UseInterceptors(FileInterceptor('material'))
    async handle_addMaterial(
        @Param('lessonId') lessonId:string,
        @UploadedFile() file,
    ){
        try {
            const sendMaterial = await this.service.addMaterialInLesson({
                lessonId,
                urlMaterial:file?.location,
            });
            return sendMaterial;
        } catch (error) {
            return error
        };
    };
};
