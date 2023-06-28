import { Injectable } from "@nestjs/common";
import { WatchLessonImplementation } from "src/repositories/anyone/implementations/WatchLesson.service";
import { IWatchLesson } from "./Watch.DTO";

@Injectable()
export class WatchLessonService {
    constructor(
        private implementation:WatchLessonImplementation,
    ){};

    async searchLesson(data:IWatchLesson){
        const search = await this.implementation.searchLesson(data);
        return search;
    };
};
