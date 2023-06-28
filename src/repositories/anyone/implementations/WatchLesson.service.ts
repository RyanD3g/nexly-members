import { HttpException, Injectable } from "@nestjs/common";
import { AWatchLesson } from "../IGetLessonForWatch.anyone";
import { PrismaService } from "src/database";
import { IWatchLesson } from "src/useCases/anyone/toWatchLesson/Watch.DTO";

@Injectable()
export class WatchLessonImplementation implements AWatchLesson {
    constructor(
        private prisma:PrismaService,
    ){};
    async searchLesson(data: IWatchLesson): Promise<String> {
        const lesson = await this.prisma.movies_Modules.findUnique({
            where:{ id:data.urlMovie, },
        });
        if(!lesson){
            throw new HttpException('Aula inexistente!!', 400);
        };
        return lesson.urlMovie;
    };
};
