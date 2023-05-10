import { IsNotEmpty } from "class-validator";

export class ICreateLesson {
    moduleId:string;
    
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    urlMovie:string;
    
    urlMaterial?:string;

    @IsNotEmpty()
    description:string;

    @IsNotEmpty()
    duration:string;
};
