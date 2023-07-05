import { IWatchLesson } from "src/useCases/anyone/toWatchLesson/Watch.DTO";

export abstract class AWatchLesson {
    abstract searchLesson(data:IWatchLesson): Promise<String>;
};
