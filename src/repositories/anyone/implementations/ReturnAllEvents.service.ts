import { Injectable } from "@nestjs/common";
import { AAllEvents } from "../IAllEvents.anyone";
import { SchedulingEvent } from "@prisma/client";
import { PrismaService } from "src/database";
import { SchedulingEventPagination } from "src/useCases/anyone/allEvents/AllEvents.dto";
export class returnEvents {
    allPosts:SchedulingEvent[];
    totalPagination:number;
};
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
    async returnAllEventsNoPast(querys:SchedulingEventPagination): Promise<returnEvents> {
        const allPosts = await this.prisma.schedulingEvent.findMany({
            where:{ isHappened:false, },
            skip:querys.skip? querys.skip:0,
            take:querys.take? querys.take:0,
        });
        return { allPosts, totalPagination:allPosts.length };
    };
};
