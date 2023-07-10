import { Controller, Get } from "@nestjs/common";
import { ReturnTicketsService } from "./ReturnTickets.service";

@Controller('all')
export class ReturnTicketsController {
    constructor(
        private service:ReturnTicketsService,
    ){};

    @Get('tickets')
    async getTickets(
        isTest:boolean = false,
    ){
        try {
            const getAll = await this.service.viewTickets(isTest);
            return getAll;
        } catch (error) {
            return error;
        };
    };
};
