import { Injectable } from "@nestjs/common";
import { AAllEvents } from "../IAllEvents.anyone";
import { SchedulingEvent } from "@prisma/client";
import { PrismaService } from "src/database";

@Injectable()
export class ReturnAllEventsImplementation implements AAllEvents {
    constructor(
        private prisma:PrismaService,
    ){};
    async eventIsPast(eventId: string): Promise<void> {
        const changePastEventState = await this.prisma.schedulingEvent.update({
            where:{ id:eventId, },
            data:{
                isHappened:true,
            },
        });
        await this.prisma.$disconnect();
    };
    async returnAllEventsNoPast(): Promise<SchedulingEvent[]> {
        const allPosts = await this.prisma.schedulingEvent.findMany({
            where:{ isHappened:false, },
        });
        return allPosts;
    };
};
