import { HttpException, Injectable } from "@nestjs/common";
import { ICreatePostProducerDTO } from "./CreatePost.DTO";
import * as dayjs from 'dayjs';
import { CreateAPosProducertInMemory } from "../../../repositories/Producer/implementations/in-memory-database/createPost.memory";
import { CreatePostProducerImplementation } from "../../../repositories/Producer/implementations/CreatePost.service";

@Injectable()
export class CreateAPostProducerService {
    constructor(
        private inMemory:CreateAPosProducertInMemory,
        private implementation:CreatePostProducerImplementation,
    ){};

    async create(data:ICreatePostProducerDTO, isTest:boolean){
        if(data.contentPost === undefined && data.urlPhotoPost === undefined){
            throw new HttpException("Não é possível fazer uma postagem vazia!", 400);
        };
        if(isTest){
            const saveInMemory = this.inMemory.create({ ...data, momentPost:`${dayjs().format('YYYY-MM-DD')} - ${dayjs().format('HH:mm:ss')}` });
            return saveInMemory;
        };
        const saveImplementation = await this.implementation.create({ ...data, momentPost:`${dayjs().format('YYYY-MM-DD')} - ${dayjs().format('HH:mm:ss')}` });
        return saveImplementation;
    };
};