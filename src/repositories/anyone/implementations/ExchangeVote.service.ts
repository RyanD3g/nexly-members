import { Injectable } from "@nestjs/common";
import { AExchange } from "../IExchange.anyone";
import { Option_Poll } from "@prisma/client";
import { IExchangeDTO } from "src/useCases/anyone/exchangeVote/Exchange.DTO";
import { PrismaService } from "src/database";

@Injectable()
export class ExchangeVoteImplementation implements AExchange {
    constructor(
        private readonly prisma:PrismaService,
    ){};
    async optionOldExists(optionId: string): Promise<Option_Poll> {
        const searchForOldOption = await this.prisma.option_Poll.findUnique({
            where:{ id:optionId, },
        });
        return searchForOldOption;
    };
    async newOptionExists(optionId: string): Promise<Option_Poll> {
        const searchForNewOption = await this.prisma.option_Poll.findUnique({
            where:{ id:optionId, },
        });
        return searchForNewOption;
    };
    async exchangeVote(data: IExchangeDTO): Promise<Option_Poll> {
        const removeOption = await this.prisma.option_Poll.update({
            where:{ id:data.oldOptionId, },

            data:{
                qntVotes: - 1,
            }
        });
        const exchange = await this.prisma.option_Poll.update({
            where:{ id:data.newOptionId, },

            data:{
                qntVotes: + 1,
            }
        });
        await this.prisma.$disconnect();
        return exchange;
    };
};
