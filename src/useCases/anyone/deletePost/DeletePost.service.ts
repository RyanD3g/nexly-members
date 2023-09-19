import { Injectable } from "@nestjs/common";
import { DeletePostImplementation } from "../../../repositories/anyone/implementations/DeletePost.service";
import { DeletePostInMemory } from "../../../repositories/anyone/implementations/in-memory-database/deletePost.memory";
import { IDeletePostDTO } from "./DeletePost.DTO";

@Injectable()
export class DeletePostService {
    constructor(
        private inMemory:DeletePostInMemory,
        private implementation:DeletePostImplementation,
    ){};

    async deletePost(data:IDeletePostDTO, isTest:boolean){
        if(isTest){
            const postDeleted = this.inMemory.delete(data);
            return postDeleted;
        };
        const postDeleted = await this.implementation.delete(data);
        return postDeleted;
    };
};
