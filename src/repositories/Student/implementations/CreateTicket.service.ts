import { Injectable } from "@nestjs/common";
import { ACreateTicket } from "../ICreateTicket.student";
import { ICreateTicketDTO } from "../../../useCases/students/createTicket/CreateTicket.DTO";
import { Student } from "@prisma/client";
import { PrismaService } from "../../../database";

@Injectable()
export class CreateTicketImplementation implements ACreateTicket {
    constructor(
        private prisma:PrismaService,
    ){};
    async createTicket({
        name,
        number,
        category,
        priority,
        description,
        studentId,
    }: ICreateTicketDTO): Promise<Student> {
        const createTicket = await this.prisma.student.update({
            where:{ id:studentId, },

            data:{
                TicketSuport_Student:{
                    create:{
                        name,
                        number,
                        category,
                        priority,
                        description,
                    },
                },
            },
        });
        await this.prisma.$disconnect();
        return createTicket;
    };
};
