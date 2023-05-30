import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CommentInLessonImplementation } from "../../../repositories/Student/implementations/Comment.service";
import { CommentInMemory } from "../../../repositories/Student/implementations/in-memory-database/comment.memory";
import { ICommentDTO } from "./Comment.DTO";

@Injectable()
export class CommentInLessonService {
    constructor(
        private implementation:CommentInLessonImplementation,
        private inMemory:CommentInMemory,
    ){};

    async createComment(data:ICommentDTO, isTest:boolean){
        if(isTest){
            const isMyCourse_ = await this.inMemory.isMycourse(data);
            if(!isMyCourse_){
                throw new HttpException('Esse curso não é seu!!', HttpStatus.UNAUTHORIZED);
            };
            const createCommentInLesson = await this.inMemory.comment(data);
            return createCommentInLesson;    
        }
        const isMyCourse_ = await this.implementation.isMycourse(data);
        if(!isMyCourse_){
            throw new HttpException('Esse curso não é seu!!', HttpStatus.UNAUTHORIZED);
        };
        const createCommentInLesson = await this.implementation.comment(data);
        return createCommentInLesson;
    };
};
