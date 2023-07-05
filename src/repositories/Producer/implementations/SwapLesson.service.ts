import { Injectable } from "@nestjs/common";
import { ASwapLesson } from "../ISwapLesson.producer";
import { Movies_Modules } from "@prisma/client";
import { ISwapLessonDTO } from "src/useCases/producer/swapLesson/SwapLesson.DTO";
import { PrismaService } from "src/database";

@Injectable()
export class SwapLessonImplementation implements ASwapLesson {
    constructor(
        private prisma:PrismaService,
    ){};
    async swap({
        lessonId,
        description,
        duration,
        name,
        urlMovie,
    }: ISwapLessonDTO): Promise<Movies_Modules> {
        const swapLesson = await this.prisma.movies_Modules.update({
            where:{ id:lessonId, },
            data:{
                description,
                duration,
                name,
                urlMovie, 
            },
        });
        await this.prisma.$disconnect();
        return swapLesson;
    };
};
