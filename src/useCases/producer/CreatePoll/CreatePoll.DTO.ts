import { IsNotEmpty } from "class-validator";

export class IOptionsForPollDTO {
    @IsNotEmpty()
    nameSelection:string;

    pollId?:string;
    
    qntVotes?:number;
};

export class ICreatePollDTO {
    producerId:string;

    @IsNotEmpty()
    titleQuestion:string;
    
    descriptionQuestion?:string;

    options?:IOptionsForPollDTO;
};