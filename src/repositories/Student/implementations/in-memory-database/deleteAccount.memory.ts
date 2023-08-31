import * as dayjs from 'dayjs';
import { Injectable } from "@nestjs/common";
import { ADeleteAccountStudent } from "../../IDeleteAccount.student";
import { Student } from "@prisma/client";
import { IDeleteAccountStudentDTO } from "../../../../useCases/students/setDateForDelete/DeleteAccount.DTO";

@Injectable()
export class DeleteAccountStudentInMemory implements ADeleteAccountStudent {
    private studentModel: Student[] = [
        {
            id:'123',
            name:'Teste de nome',
            email:'Teste de email',
            lastname:'Teste de sobrenome',
            password:'Teste de password',
            bio:'Teste de Bio',
            delDate:null,
            code:null,
            eventsSaved:['teste'],
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
            eventsSaved:['teste'],
            lastname:'Teste de sobrenome 2',
            password:'Teste de password 2',
            bio:'Teste de Bio 2',
            delDate:'12/06/2023',
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
    ];
    async isSetDelete(studentId: string): Promise<boolean | Student> {
        const student = this.studentModel.filter(e => e.id == studentId);
        const isSetDate = student[0].delDate === null;
        return isSetDate;
    };
    async deleteAccount(data: IDeleteAccountStudentDTO): Promise<Object> {
        const setDate = this.studentModel.filter(e => e.id == data.studentId);
        const setDateForDelete = setDate[0].delDate = dayjs().format('DD/MM/YYYY');
        return this.studentModel[0];
    };
};
