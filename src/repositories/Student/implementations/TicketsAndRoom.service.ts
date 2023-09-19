import { Student } from "@prisma/client";
import { ITicketsDTO } from "../../../useCases/students/myTicketsAndRoom/TicketsAndRoom.DTO";
import { ATicketsAndRoom } from "../ITicketsAndRoom.student";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../database";

@Injectable()
export class TicketsAndRoomImplementation implements ATicketsAndRoom {
    constructor(
        private prisma:PrismaService,
    ){};
    async myTickets(data: ITicketsDTO): Promise<Student>{
        const tickets = await this.prisma.student.findUnique({
            where:{ id:data.studentId },
            include: { 
                TicketSuport_Student:{
                    include:{
                        ticketRoom:true,
                    },
                },
            },
        });
        return tickets;
    };
};
