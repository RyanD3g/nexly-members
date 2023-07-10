import { Injectable } from "@nestjs/common";
import { AReturnTickets } from "../IReturnTickets.anyone";
import { PrismaService } from "../../../database";

@Injectable()
export class ReturnTicketImplementation implements AReturnTickets {
    constructor(
        private prisma:PrismaService,
    ){};
   async allTickets(): Promise<boolean[]> {
        const allTickets = await this.prisma.student.findMany({
            include:{
                TicketSuport_Student:true,
            }
        });
        return allTickets.map(e => e.TicketSuport_Student.length > 0);
    };
};
