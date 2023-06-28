import { Injectable } from "@nestjs/common";
import { SwapLessonImplementation } from "src/repositories/Producer/implementations/SwapLesson.service";
import { ISwapLessonDTO } from "./SwapLesson.DTO";

@Injectable()
export class SwapLessonService {
    constructor(
        private implementation:SwapLessonImplementation,
    ){};
    async swapLesson(data:ISwapLessonDTO){
        const swaped = await this.implementation.swap(data);
        return swaped;
    };
};
