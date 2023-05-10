import { Injectable } from "@nestjs/common";
import { ACreateModule } from "../ICreateModule.producer";
import { ICreateModuleDTO } from "../../../useCases/producer/createModulesForACourse/CreateModule.DTO";
import { PrismaService } from "../../../database";

@Injectable()
export class CreateModuleImplementation implements ACreateModule{
    constructor(
        private prisma:PrismaService,
    ){};
    async createModule({
        courseId,
        description,
        duration,
        name,
    }: ICreateModuleDTO): Promise<Object> {
        const created = await this.prisma.courses_Producer.update({
            where:{ id:courseId, },
            data:{
                modules:{
                  create:{
                    name,
                    description,
                    duration,
                  },
                },
            },
        });

        return { createdModule:true };
    };
};
