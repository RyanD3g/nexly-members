import { ICreateModuleDTO } from "src/useCases/producer/createModulesForACourse/CreateModule.DTO";

export abstract class ACreateModule {
    abstract createModule(data:ICreateModuleDTO): Promise<Object>;
};
