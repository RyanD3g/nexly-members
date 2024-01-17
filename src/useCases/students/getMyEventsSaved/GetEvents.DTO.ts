import { IsUUID } from "class-validator";

export class IGetMyEvents {
    @IsUUID()
    studentId:string;
    calendarId?:string;
};
