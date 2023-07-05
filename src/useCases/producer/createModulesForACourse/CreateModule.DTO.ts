import { IsEmpty, IsNotEmpty } from "class-validator";

export class ICreateModuleDTO {
    courseId:string;

    @IsNotEmpty()
    name:string;
    
    @IsNotEmpty()
    description:string;

    @IsNotEmpty()
    duration:string;
};
