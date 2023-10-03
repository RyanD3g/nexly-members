import { IsUUID, isUUID } from "class-validator";

export class IDataForSaveEvent {
    @IsUUID()
    studentId:string;

    @IsUUID()
    eventId:string;
};
