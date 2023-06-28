import { Movies_Modules } from "@prisma/client";
import { ISwapLessonDTO } from "src/useCases/producer/swapLesson/SwapLesson.DTO";

export abstract class ASwapLesson {
    abstract swap(data:ISwapLessonDTO): Promise<Movies_Modules>;
};
