import * as crypto from 'crypto';
import * as aws from 'aws-sdk';
import * as Busboy from 'busboy';
import { Body, Controller, HttpException, Param, Put, Request } from "@nestjs/common";
import { SwapLessonService } from "./SwapLesson.service";
import { CustomRequest } from "src/interfaces/Request.interface";
import { ISwapLessonDTO } from "./SwapLesson.DTO";
import { Readable } from 'stream';

const s3 = new aws.S3({
    region:'us-east-1',
    credentials:{
        accessKeyId: 'AKIA3K76EFD66VGUZZHV',
        secretAccessKey: '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'
    }
})

@Controller('swap')
export class SwapLessonController {
    constructor(
        private service:SwapLessonService,
    ){};

    @Put('lesson/:lessonId')
    async handle_upload(
        @Request() req:CustomRequest,
        @Body() body:ISwapLessonDTO,
        @Param('lessonId') lessonId:string,
    ){
        try {
            const bus = Busboy({ headers:req.headers })
            bus.on('file', (_, file:Readable, filename)=>{
                const allowFiles = ["video/mpeg", "video/mp4", "video/webpm"];
                if(!allowFiles.some(e => e == filename.mimeType)){
                    throw new HttpException('Invalid File Type!!', 400);
                };
                const hash = crypto.randomBytes(16).toString('hex');
                const filenameHash = `lessons/${hash} - ${filename.filename}`;
                s3.upload({
                    Bucket:'lessons-nexly-01',
                    Key:filenameHash,
                    Body:file,
                    ACL:'public-read',
                }).send(async (err:Error, data)=>{
                    const sendSwaped = await this.service.swapLesson({
                        lessonId,
                        description:body.description,
                        duration:body.duration,
                        name:body.name,
                        urlMovie:data?.Location,
                    });

                    if(err){
                        throw new HttpException(`Erro ao fazer upload: ${err}`, 500);
                    };
                    return sendSwaped;
                });
            });

            bus.on('finish', ()=>{
                return Promise.resolve({ uploaded: true });
            });
            req.pipe(bus);
        } catch (error) {
            return error;
        }
    };
};
