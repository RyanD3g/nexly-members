import { IsNotEmpty, IsUUID } from "class-validator";

export class IAddItemCalendarDTO {
    @IsUUID()
    @IsNotEmpty()
    eventId:string;
    
    studentId:string;
};
