import { ApiProperty, ApiQuery } from "@nestjs/swagger";
import { returnEvents } from "src/repositories/anyone/implementations/ReturnAllEvents.service";

export class SchedulingEventPagination {
    @ApiProperty({ type:Number, required:false, example:"skip=10" })
    skip:number;

    @ApiProperty({ type:Number, required:false, example:"take=10" })
    take:number;
};

export class SchedulingEventOutput extends returnEvents {
    @ApiProperty({ type:String })
    id: string;

    @ApiProperty({ type:String })
    titleEvent: string;

    @ApiProperty({ type:String })
    dataOfEvent: string;

    @ApiProperty({ type:Boolean })
    isHappened: boolean;

    @ApiProperty({ type:String })
    hourOfEvent: string;

    @ApiProperty({ type:String })
    descriptionAboutEvent: string;

    @ApiProperty({ type:String })
    calendarId: string | null;

    @ApiProperty({ type:String })
    producerId: string;

    @ApiProperty({ type:Date })
    createdAt: Date;

    @ApiProperty({ type:Date })
    updatedAt: Date;

    @ApiProperty({ type:Number })
    totalPagination: number;
};