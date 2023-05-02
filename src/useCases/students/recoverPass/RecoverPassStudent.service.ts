import { Injectable } from "@nestjs/common";
import { RecoverPassStudentImplementation } from "../../../repositories/Student/implementations/RecoverPass.service";
import { IRecoverDto } from "./RecoverPassStudent.DTO";
import * as token from 'rand-token';

@Injectable()
export class RecoverPassStudentService {
    constructor(
        private implementation:RecoverPassStudentImplementation,
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
