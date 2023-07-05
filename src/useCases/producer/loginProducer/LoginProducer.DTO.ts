import { IsNotEmpty } from "class-validator";

export class ILoginProducer {
    @IsNotEmpty()
    email:string;
    
    @IsNotEmpty()
    password:string;
};
