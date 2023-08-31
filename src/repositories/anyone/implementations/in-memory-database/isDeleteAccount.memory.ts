import * as dayjs from 'dayjs';
import * as moment from 'moment';
import { Injectable } from "@nestjs/common";
import { Student } from "@prisma/client";
import { AIsDeleteAccount } from '../../IsAccountDelete.anyone';
import localized from 'dayjs/plugin/duration'
@Injectable()
export class IsDeleteAccountInMemory implements AIsDeleteAccount {
    private studentModel: Student[] = [
        {
            id:'123',
            name:'Teste de nome',
            email:'Teste de email',
            lastname:'Teste de sobrenome',
            password:'Teste de password',
            eventsSaved:[''],
            bio:'Teste de Bio',
            delDate:null,
            code:null,
            codeDate:null,
            cpf:'12345478909897865',
            createdAt:new Date(),
            phone:'1243567890-547698',
            photo:'Teste de url de photo',
            sex:'Masculino',
            student:true,
            updatedAt:new Date(),
        },
        {
            id:'321',
            name:'Teste de nome 2',
            email:'Teste de email 2',
            lastname:'Teste de sobrenome 2',
            password:'Teste de password 2',
            bio:'Teste de Bio 2',
            eventsSaved:[''],
            delDate:'2023-05-20',
            code:null,
            codeDate:null,
            cpf:'12345478909897865 2',
            createdAt:new Date(),
            phone:'1243567890-547698 2',
            photo:'Teste de url de photo 2',
            sex:'Masculino',
            student:true,
            updatedAt:new Date(),
        },
    ]
    async isDelete(dateNow: string): Promise<Student[]> {
        const deleted = this.studentModel.filter(e => e.delDate != null);
        for(let i=0; i<this.studentModel.length; i++){
            if(dayjs(dateNow, 'YYYY-MM-DD').diff(this.studentModel[i].delDate, 'day') >= -10){
                delete this.studentModel[i];
            };
        };
        const date1 = new Date('29/06/2023');
        const date2 = new Date('30/06/2023');
        const difference = date1.getTime() - date2.getTime();
        console.log("AQUI +++++++++++++++++++++++++++++----", this.studentModel);
        return this.studentModel;
    };
};
