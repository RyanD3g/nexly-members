import { IsNotEmpty } from "class-validator";

export class IWatchLesson {
    @IsNotEmpty()
    urlMovie:string;
};
