import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Response } from "express";
import { ToWatchLessonImplementation } from "src/repositories/anyone/implementations/ToWatchLesson.service";
import { IToWatchLessonDTO } from "./toWatchLesson.DTO";

@Injectable()
export class ToWatchLessonService {
    constructor(
        private implementation:ToWatchLessonImplementation,
    ){};

    async createStreaming(data:IToWatchLessonDTO, res:Response){
        // const isMyCourse = await this.implementation.isMyCourse(data);
        // if(!isMyCourse){
        //     throw new HttpException('Você não possui este curso!!', HttpStatus.BAD_REQUEST);
        // };
        const renderStream = await this.implementation.wacthCourse(data, res);
        return renderStream;
    };
};
