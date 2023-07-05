import { Body, Controller, Post, Request } from "@nestjs/common";
import { CreateTicketService } from './CreateTicket.service';
import { ICreateTicketDTO } from "./CreateTicket.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";

@Controller('create')
export class CreateTicketController {
    constructor(
        private service:CreateTicketService
    ){};

    @Post('ticket')
    async createTicket(
        @Body() body:ICreateTicketDTO,
        isTest:boolean = false,
        @Request() req?:CustomRequest,
    ){
        try {
            const create = await this.service.createTicketForSuport({
                name:body.name,
                number:body.number,
                category:body.category,
                description:body.description,
                priority:body.priority,
                studentId: req?.studentId || body.studentId,
            }, isTest);
            return create;
        } catch (error) {
            return error;
        };
    };
};
