import * as dayjs from 'dayjs';
import { Injectable } from "@nestjs/common";
import { ACourseIsDelete } from "../../ICourseIsDelete.anyone";
import { Courses_Producer } from "@prisma/client";

@Injectable()
export class IsDeleteCourseInMemory implements ACourseIsDelete {
    private courseProducerModel: Courses_Producer[] = [
        {
            id:'123',
            name:'Javascript FullStack',
            description:'Teste de descrição',
            cretificate:true,
            delDate:'05/05/2023',
            duration:'65h',
            urlThumbCourse:'teste.com',
            categorysTag:['T.I', 'Programação'],
            producerId:'234',
            createdAt:new Date(),
            updatedAt:new Date(),
        },
        {
            id:'321',
            name:'Javascript FullStack 2',
            description:'Teste de descrição',
            cretificate:true,
            delDate:null,
            duration:'65h',
            urlThumbCourse:'teste.com',
            categorysTag:['T.I', 'Programação'],
            producerId:'234',
            createdAt:new Date(),
            updatedAt:new Date(),
        },
        {
            id:'76834',
            name:'Javascript FullStack 3',
            description:'Teste de descrição',
            cretificate:true,
            delDate:'07/06/2023',
            duration:'65h',
            urlThumbCourse:'teste.com',
            categorysTag:['T.I', 'Programação'],
            producerId:'234',
            createdAt:new Date(),
            updatedAt:new Date(),
        }
    ]
    async isDelete(dateNow: string): Promise<Courses_Producer[]> {
        const deleted = this.courseProducerModel.filter(e => e.delDate != null);
        for(let i=0; i<this.courseProducerModel.length; i++){
            if(dayjs(dateNow, 'DD/MM/YYYY').diff(this.courseProducerModel[i].delDate, 'day') > 10){
                delete this.courseProducerModel[i];
            };
        };
        console.log("AQUI +++++++++++++++++++++++++++++----", this.courseProducerModel);
        return this.courseProducerModel;
    };
};
