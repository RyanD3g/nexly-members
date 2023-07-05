import { Injectable } from "@nestjs/common";
import { RecoverPassProducerImplementation } from "../../../repositories/Producer/implementations/RecoverPass.service";
import { IRecoverDto } from "./RecoverPassProducer.DTO";
import * as token from 'rand-token';

@Injectable()
export class RecoverPassProducerService {
    constructor(
        private implementation:RecoverPassProducerImplementation,
    ){};

    async sendedEmail({ email }:IRecoverDto){
        const hash = token.generate(6, '123456789');
        const date_day = new Date().getDay();
        const date_month = new Date().getMonth();
        const date_year = new Date().getFullYear();
        const sendInformations = await this.implementation.sendEmail({
            email,
            code:hash,
            codeDate: `${date_day}/${date_month}/${date_year}`,
        });

        return sendInformations;
    };
};
