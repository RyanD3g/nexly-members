import { IsNotEmpty } from "class-validator";

export class ILoginStudent {
    @IsNotEmpty()
    email:string;
    
    @IsNotEmpty()
    password:string;
};
