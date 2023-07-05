import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DeleteAccountStudentInMemory } from "../../../repositories/Student/implementations/in-memory-database/deleteAccount.memory";
import { IDeleteAccountStudentDTO } from "./DeleteAccount.DTO";
import { DeleteAccountStudentImplementation } from "../../../repositories/Student/implementations/DeleteAccount.service";

@Injectable()
export class DeleteAccountStudentService {
    constructor(
        private inMemory:DeleteAccountStudentInMemory,
        private implementation:DeleteAccountStudentImplementation,
    ){};
    async solicitationDelete(data:IDeleteAccountStudentDTO, isTest:boolean){
        if(isTest){
            const myAccountIsDelete = await this.inMemory.isSetDelete(data.studentId);
            if(!myAccountIsDelete){
                throw new Error('Essa conta já está programada para deleção.');
            };
            const deleteAccount = await this.inMemory.deleteAccount(data);
            return deleteAccount;
        }
        const myAccountIsDelete = await this.implementation.isSetDelete(data.studentId);
        if(!myAccountIsDelete){
            throw new HttpException('Essa conta já está programada para deleção.', HttpStatus.BAD_REQUEST);
        };
        const deleteAccount = await this.implementation.deleteAccount(data);
        return deleteAccount;
    };
};
