import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { GiveLikeImplementation } from "../../../repositories/Student/implementations/GiveLike.service";
import { GiveLikeInMemory } from "../../../repositories/Student/implementations/in-memory-database/giveLike.memory";
import { IGiveLikeDTO } from "./GiveLike.DTO";

@Injectable()
export class GiveLikeService {
    constructor(
        private implementation:GiveLikeImplementation,
        private inMemory:GiveLikeInMemory,
    ){};

    async MoreLike(data:IGiveLikeDTO, isTest:boolean){
        if(isTest){
            const findForLesson = await this.inMemory.isExists(data.lessonId);
            if(!findForLesson){
                throw new HttpException('Curso inexistente!!', HttpStatus.BAD_REQUEST);;
            };
            const likedInMemory = await this.inMemory.like(data);
            return likedInMemory;
        };
        const findForLesson = await this.implementation.isExists(data.lessonId);
        if(!findForLesson){
            throw new HttpException('Curso inexistente!!', HttpStatus.BAD_REQUEST);
        };
        const likedReal = await this.implementation.like(data);
        return likedReal;
    };
};
