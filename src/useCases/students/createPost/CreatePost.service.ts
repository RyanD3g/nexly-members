import { Injectable } from "@nestjs/common";
import { CreatePostImplementation } from "../../../repositories/Student/implementations/CreatePost.service";
import { CreateAPostInMemory } from "../../../repositories/Student/implementations/in-memory-database/createAPost.memory";
import { ICreatePostDTO } from "./CreatePost.DTO";
import * as dayjs from 'dayjs';

@Injectable()
export class CreateAPostService {
    constructor(
        private inMemory:CreateAPostInMemory,
        private implementation:CreatePostImplementation,
    ){};

    async create(data:ICreatePostDTO, isTest:boolean){
        if(isTest){
            const saveInMemory = this.inMemory.create({ ...data, momentPost:`${dayjs().format('YYYY-MM-DD')} - ${dayjs().format('HH:mm:ss')}` });
            return saveInMemory;
        };
        const saveImplementation = await this.implementation.create({ ...data, momentPost:`${dayjs().format('YYYY-MM-DD')} - ${dayjs().format('HH:mm:ss')}` });
        return saveImplementation;
    };
};