import { Response } from "express";
import { CustomRequest } from "src/interfaces/Request.interface";

export interface IDataForStream{
    urlLesson:string;
    quality:string;
    speed:number;
};
export abstract class AStreamLesson {
    abstract isStream(data:IDataForStream, res:Response);
};
