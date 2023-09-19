import { Injectable } from "@nestjs/common";
import { AExchange } from "../../IExchange.anyone";
import { Option_Poll } from "@prisma/client";
import { IExchangeDTO } from "src/useCases/anyone/exchangeVote/Exchange.DTO";

@Injectable()
export class ExchangeVoteInMemory implements AExchange {
    private optionModel: Option_Poll[] = [
        {
            id:'123',
            nameSelection:'Teste de nome',
            optionId:'45678',
            qntVotes: 456,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id:'456',
            nameSelection:'Teste de nome',
            optionId:'56778',
            qntVotes: 567,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ];
    optionOldExists(optionId: string): boolean {
        const isExists = this.optionModel.some(e => e.id === optionId);
        return isExists;
    };
    newOptionExists(optionId: string): boolean | Promise<Option_Poll> {
        const isExists = this.optionModel.some(e => e.id === optionId);
        return isExists;
    };
    exchangeVote(data: IExchangeDTO): Object {
        const removeVote = this.optionModel.filter(e => e.id === data.oldOptionId);
        removeVote[0].qntVotes = - 1;
        const addOtherVote = this.optionModel.filter(e => e.id === data.newOptionId);
        addOtherVote[0].qntVotes++;
        return { newOption:addOtherVote[0], oldOption:removeVote[0], };
    };
};
