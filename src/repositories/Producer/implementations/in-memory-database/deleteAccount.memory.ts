import * as dayjs from 'dayjs';
import { Injectable } from "@nestjs/common";
import { ADeleteAccount } from '../../IDeleteAccount.producer';
import { IDeleteAccountDTO } from "../../../../useCases/producer/deleteAccount/DeleteAccount.DTO";
import { Producer } from "@prisma/client";

@Injectable()
export class DeleteAccountInMemory implements ADeleteAccount {
    private ProducerModel: Producer[] = [
        {
            id:'123',
            name:'Teste de name',
            email:'Teste de email',
            password:'123456789',
            code:null,
            codeDate:null,
            delDate:null,
            identity:'23545678976',
            phone:'11356745422',
            isProducer:true,
            isAccountActive:true,
            lastname:'Teste de sobrenome',
            photo:'TestedeUrlPhoto.com',
            sex:'Masculino',
            createdAt:new Date(),
            updatedAt:new Date(),
        },
        {
            id:'321',
            name:'Teste de name 2',
            email:'Teste de email 2',
            password:'123456789 2',
            code:null,
            codeDate:null,
            delDate:'12/03/2023',
            identity:'23545678976 2',
            phone:'11356745422 2',
            isProducer:true,
            isAccountActive:true,
            lastname:'Teste de sobrenome 2',
            photo:'TestedeUrlPhoto.com 2',
            sex:'Masculino',
            createdAt:new Date(),
            updatedAt:new Date(),
        },
    ];
    async accountIsDate(producerId: string): Promise<boolean> {
        const producer = this.ProducerModel.filter(e => e.id == producerId);
        const isSetDate = producer[0].delDate === null;
        return isSetDate;
    };
    async deleteAccount(data: IDeleteAccountDTO): Promise<Producer> {
        const setDate = this.ProducerModel.filter(e => e.id == data.producerId);
        const setDateForDelete = setDate[0].delDate = dayjs().format('DD/MM/YYYY');
        return this.ProducerModel[0];
    };
};
