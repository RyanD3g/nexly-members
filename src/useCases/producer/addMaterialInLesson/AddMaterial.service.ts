import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { AddMaterialImplementation } from "src/repositories/Producer/implementations/AddMaterial.service";
import { IAddMaterialInLessonDTO } from "./AddMaterial.DTO";

@Injectable()
export class AddMaterialService {
    constructor(
        private implementation:AddMaterialImplementation,
    ){};

    async addMaterialInLesson(data:IAddMaterialInLessonDTO){
        const isExistisThisLesson = await this.implementation.isExistsLesson(data.lessonId);
        if(!isExistisThisLesson){
            throw new HttpException('Aula inexistente!', HttpStatus.BAD_REQUEST);
        };
        const addMaterial = await this.implementation.addMaterial(data);
        return addMaterial;
    };
};
