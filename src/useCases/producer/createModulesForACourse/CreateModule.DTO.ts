import { IsEmpty } from "class-validator";

export class ICreateModuleDTO {
    courseId:string;

    @IsEmpty()
    name:string;
    
    @IsEmpty()
    description:string;

    @IsEmpty()
    duration:string;
};
