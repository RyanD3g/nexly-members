import { Body, Controller, Delete, Param } from "@nestjs/common";
import { DeleteMaterialService } from "./DeleteMaterialLesson.service";
import { IDeleteMaterialLessonDTO } from "./DeleteMaterialLesson.DTO";

@Controller('delete')
export class DeleteMaterialController {
    constructor(
        private service:DeleteMaterialService,
    ){};

    @Delete('material/:lessonId')
    async delete(
        @Body() body?:IDeleteMaterialLessonDTO,
        isTest:boolean = false,
        @Param('lessonId') lessonId?:string,
    ){
        try {
            const sendDelete = await this.service.deleteMaterial({
                lessonId:lessonId || body.lessonId,
            }, isTest);
            return sendDelete;
        } catch (error) {
            return error;
        };
    };
};
