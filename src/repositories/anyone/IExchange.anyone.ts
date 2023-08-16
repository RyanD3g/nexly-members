import { Option_Poll } from "@prisma/client";
import { IExchangeDTO } from "src/useCases/anyone/exchangeVote/Exchange.DTO";

export abstract class AExchange {
    abstract optionOldExists(optionId:string): Promise<Option_Poll> | boolean;
    abstract newOptionExists(optionId:string): Promise<Option_Poll> | boolean;
    abstract exchangeVote(data:IExchangeDTO): Promise<Option_Poll> | Object;
};
