import { IsNotEmpty } from "class-validator";

export class IDataNecessaryToSheduleEvent {
    producerId:string;

    @IsNotEmpty()
    titleEvent:string
    
    @IsNotEmpty()
    dataOfEvent:string;
    
    @IsNotEmpty()
    hourOfEvent:string;

    descriptionAboutEvent:string;
};
