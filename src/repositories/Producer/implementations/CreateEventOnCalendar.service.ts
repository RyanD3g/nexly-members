import { Injectable } from "@nestjs/common";
import { AModelSchedulingEvent } from "../ICreateSchedulingEvent.producer";
import { IDataNecessaryToSheduleEvent } from "src/useCases/producer/createEventScheduled/CreateEvent.DTO";
import { PrismaService } from "src/database";

@Injectable()
export class CreateEventOnCalendarImplementation implements AModelSchedulingEvent {
    constructor(
        private readonly prisma:PrismaService,
    ){};
    async createEventOnCalendar({ dataOfEvent, descriptionAboutEvent, hourOfEvent, producerId, titleEvent }: IDataNecessaryToSheduleEvent) {
        const createEventInDB = await this.prisma.producer.update({
            where: { id:producerId, },
            data:{
                SchedulingEvent:{
                    create:{
                        titleEvent,
                        dataOfEvent,
                        hourOfEvent,
                        descriptionAboutEvent,
                    },
                },
            },
        });
        return createEventInDB;
    };
};
