import * as fs from 'fs';
import { Controller, Get, HttpException, Param, Request } from "@nestjs/common";
import { WatchLessonService } from "./Watch.service";
import { IWatchLesson } from "./Watch.DTO";
import { CustomRequest } from 'src/interfaces/Request.interface';
import { Response } from 'express';

@Controller('watch')
export class WatchLessonController {
    constructor(
        private service:WatchLessonService,
    ){};

    @Get('lesson')
    async watchLesson(
        @Param('urlmovieId') urlMovie:string,
        @Request() req:CustomRequest,
        res:Response,
    ){
        try {
            const url = req.get("https://images-for-profile.s3.us-east-1.amazonaws.com/2023-05-07%2013-08-52.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXNhLWVhc3QtMSJHMEUCIQC3Yrsvwi4qXu7juC2r%2BP30Iv1InwKQ5bDOiJhQfyAM1gIgCh8456snsysxbMLmgvwe1JcYVjRBK59d58AQq49juEAq7QIImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw0NzY2NTMyNDQyNjIiDN3Udz4TdlWJ5B%2BdgSrBAqKjfxpcatr8qsJHf13d9KenOv2NMD%2B7UPkhhRHYVysZW0xk1t3wNuKnhGG87iKLCNHtycpnl0XdsZmhR3K8EQBOFggDjrtKYEryNZcEtDNJx2A55ZErPWGiWxHdlm4%2FdOGSKOWGLmV%2FTNtLOeoFvtljKacHDRWqQmezyK4QIw0G2Sknxbs7cpn6mEq1jWoT1TzPLXzkFYRW%2BMpvI0TiJIDZkddKK4cTMuhPhAof4A3pcUlN%2FrgO%2F7oxQqVjjOnaKnX8R97bmKJrocmmci1Zro00QUbM2MNBaB%2FO6LlX2HNy7J24YZvsQA971JWatqMgtFH%2B9uV644lisQUcBzbKjbpei0mKZrCG7gC3rUgDXtGbs2e0XMkYVadHt0pBJzX0QEvENm%2BO7Gs5%2BPjvYb1lnfVAw3kwR%2FqbNgtV1kNdXqcgzzDXscOkBjqzAoltx%2BPVHbUe7yL9QXdFwN7zg%2Fj%2Fbm1%2BJdFCrgpU3eH9c1Y58helilb%2FVUdZFT58MJ%2FJsuEaqgHdzc%2FYK61fmCCj5x3xNoIx1ECr58EVJdKnkrO2B0neGcJtj76DQyc0ZRxnxV2zJ02TsTMQTjJSHL2P1kwLFmu7uVS8hGwf46QIFBVR6dHRGEwfW5Go3ruHZ3DzR%2B8NsDiA820ot02IXfObRtHbGBLkoXL58Mqs0unXxKigDXzNvQ1l5Vz8sTbHpvyQXOjl6GU4lpGyZWozwk3lwXmK111AvDn8s2zkXwVDjiqy3aKL%2B06Kgx1%2B3N00HUKmA2Tuv6E1feiuZqXcH9XTGmUPlzoYogzqfSu%2B%2F35FMol89o09AiqO3Q4BETd4Xp8DfdO39Q8ncq36Lbf7PLTA6qE%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230619T231205Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAW56V7J5TJJWXTFYR%2F20230619%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=67f3963febca5ddaa950239e1dc670dca83fc5976aba9b8ceabadef3358877fa")
            fs.stat(url, (err, stats)=>{
                if(err){
                    throw new HttpException('Video não encontrado!!', 404)
                };
                const { range } = req.headers;
                const { size } = stats;
                const start = Number((range || '').replace(/bytes=/, '').split('-')[0]);
                const end = size - 1;
                const chunkSize = (end - start) + 1;
                res.set({
                    'Content-Range': `bytes ${start}-${end}/${size}`,
                    'Accept-Ranges': 'bytes',
                    'Content-Length': chunkSize,
                    'Content-Type': 'video/mp4',
                });
                res.status(206);
                const stream = fs.createReadStream(url, { start, end });
                stream.on('open', ()=>stream.pipe(res));
                stream.on('error', (err)=>res.send(err));
            });
        } catch (error) {
            return error;
        };
    };
};
