import { IsBoolean, IsNotEmpty } from "class-validator";

export class ICreateCourse {
    producerId?:string;

    certificate?:boolean;
    
    name:string;

    urlThumbCourse:string;

    description:string;

    categorysTag:string[];

    duration:string;
};
