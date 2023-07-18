import { Injectable } from "@nestjs/common";
import { AReturnTickets } from "../IReturnTickets.anyone";
import { PrismaService } from "../../../database";
import { Student, TicketSuport_Student } from "@prisma/client";

@Injectable()
export class ReturnTicketImplementation implements AReturnTickets {
    constructor(
        private prisma:PrismaService,
    ){};
   async allTickets(): Promise<Student[]> {
        const allTickets = await this.prisma.student.findMany({
            include:{ TicketSuport_Student:true, },
        });
        return allTickets;
    };
};
