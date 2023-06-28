import { Injectable } from "@nestjs/common";
import { DeleteMaterialLessonImplementation } from "../../../repositories/Producer/implementations/DeleteMaterial.service";
import { DeleteMaterialLessonInMemory } from "../../../repositories/Producer/implementations/in-memory-database/deleteMaterial.memory";
import { IDeleteMaterialLessonDTO } from "./DeleteMaterialLesson.DTO";

@Injectable()
export class DeleteMaterialService {
    constructor(
        private inMemory:DeleteMaterialLessonInMemory,
        private implementation:DeleteMaterialLessonImplementation,
    ){};

    async deleteMaterial(data:IDeleteMaterialLessonDTO, isTest:boolean){
        if(isTest){
            const sendDelete = await this.inMemory.deleteMaterial(data);
        return sendDelete;
        };
        const sendDelete = await this.implementation.deleteMaterial(data);
        return sendDelete;
    };
};
