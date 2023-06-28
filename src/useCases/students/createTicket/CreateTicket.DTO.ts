import { IsNotEmpty, IsNumberString } from "class-validator";

export class ICreateTicketDTO {
    studentId:string;

    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    number:string;

    @IsNotEmpty()
    description:string;

    @IsNotEmpty()
    category:string;

    @IsNotEmpty()
    priority:string;
}