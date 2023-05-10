import { Injectable } from "@nestjs/common";
import { ACreateModule } from "../../ICreateModule.producer";
import { ICreateModuleDTO } from "../../../../useCases/producer/createModulesForACourse/CreateModule.DTO";
import { Modules_Courses } from "@prisma/client";

@Injectable()
export class CreateModuleInMemory implements ACreateModule{
    private createModule___InMemory: Modules_Courses[] = [];

    async createModule({
        courseId,
        description,
        duration,
        name,
    }: ICreateModuleDTO): Promise<Object> {
        const created = await this.createModule___InMemory.push({
            id:'123',
            name,
            description,
            duration,
            courseId,
            createdAt:new Date(),
            updatedAt:new Date(),
        });

        return { createdModule:true };
    };
};
