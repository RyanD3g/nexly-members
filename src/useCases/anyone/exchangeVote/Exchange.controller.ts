import { Body, Controller, Param, Put } from "@nestjs/common";
import { ExchangeVoteService } from "./Exchange.service";
import { IExchangeDTO } from "./Exchange.DTO";

@Controller('exchange')
export class ExchangeVoteController {
    constructor(
        private service:ExchangeVoteService,
    ){};

    @Put('option/:newOptionId/:oldOptionId')
    async handle_exchange(
        @Body() body?:IExchangeDTO,
        isTest:boolean = false,
        @Param('newOptionId') newOptionId?:string,
        @Param('oldOptionId') oldOptionId?:string,
    ){
        try {
            const exchange = await this.service.executeExchange({
                newOptionId:newOptionId || body?.newOptionId,
                oldOptionId:oldOptionId || body?.oldOptionId,
            }, isTest);
            return exchange;
        } catch (error) {
          return error;  
        };
    };
};
