import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DeleteAccountInMemory } from "../../../repositories/Producer/implementations/in-memory-database/deleteAccount.memory";
import { DeleteAccountImplementation } from "../../../repositories/Producer/implementations/DeleteAccount.service";
import { IDeleteAccountDTO } from "./DeleteAccount.DTO";

@Injectable()
export class DeleteAccountService {
    constructor(
        private inMemory:DeleteAccountInMemory,
        private implementation:DeleteAccountImplementation,
    ){};
    async solicitationDelete(data:IDeleteAccountDTO, isTest:boolean){
        if(isTest){
            const myAccountIsDelete = await this.inMemory.accountIsDate(data.producerId);
            if(!myAccountIsDelete){
                throw new Error('Essa conta já está programada para deleção.');
            };
            const deleteAccount = await this.inMemory.deleteAccount(data);
            return deleteAccount;
        }
        const myAccountIsDelete = await this.implementation.accountIsDate(data.producerId);
        if(!myAccountIsDelete){
            throw new HttpException('Essa conta já está programada para deleção.', HttpStatus.BAD_REQUEST);
        };
        const deleteAccount = await this.implementation.deleteAccount(data);
        return deleteAccount;
    };
};
