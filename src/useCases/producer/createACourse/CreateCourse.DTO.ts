import { IsNotEmpty } from "class-validator";

export class ICreateCourse {
    producerId?:string;

    certificate?:boolean;
    
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    urlThumbCourse:string;

    @IsNotEmpty()
    description:string;

    @IsNotEmpty()
    categorysTag:string[];

    @IsNotEmpty()
    duration:string;
};
