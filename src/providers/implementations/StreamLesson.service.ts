import { Injectable } from "@nestjs/common";
import { AStreamLesson, IDataForStream } from "../IStreamLesson.provider";
import * as request from 'request'
import { Response } from "express";
import { Readable, ReadableOptions } from "stream";

@Injectable()
export class StreamLessonProvider implements AStreamLesson {
    async isStream(data: IDataForStream, res:Response){
        const videoStream = request.get(data.urlLesson);
        console.log("Response aqui: ", res)
        res?.setHeader('Content-Type', 'video/mp4');
        res.setHeader('Accept-Ranges', 'bytes');
        res.setHeader('Cache-Control', 'public, max-age=31536000');

        class read extends Readable {
            constructor(options?: ReadableOptions){
            super(options);
    
        videoStream.on('data', (chunk: any) => {
            this.push(chunk);
        });
        
        videoStream.on('end', () => {
            this.push(null);
        });
        
        videoStream.on('error', (err: any) => {
            console.error(err);
            res.status(500).send('Erro ao carregar o vídeo');
        });
            }
            _read(){}
        }
        
        new read()
            .pipe(res);
    };
};
