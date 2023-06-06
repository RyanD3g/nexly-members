import { Controller, Get, Param, Query } from "@nestjs/common";
import { ToWatchLessonService } from "./toWatchLesson.service";
import { CustomRequest } from "src/interfaces/Request.interface";
import { Response } from "express";

@Controller('lesson')
export class ToWatchLessonController {
    constructor(
        private service:ToWatchLessonService,
    ){};

    @Get('/video/:quality')
    async watch(
        @Query('urlVideo') url:string,
        @Param('quality') quality:string,
        req:CustomRequest,
        res:Response,
    ){ 
        const isWatch = await this.service.createStreaming({ 
            lessonId:'https://lessons-nexly-members.s3.amazonaws.com/lessons/yt5s.io-PapaMike+x+Flip+-+%C3%9Altimos+Samurais+(TuboyBeats)(720p).mp4',
            quality,
            speed:1.0,
            courseId:'123',
            studentId:'123',
         }, res);

         return isWatch;
    };
};
