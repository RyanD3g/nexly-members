import { Courses_Student, Courses_Producer } from "@prisma/client";
import { IGetCertificatesDTO } from "../../../../useCases/students/myCertificate/Certificate.DTO";
import { ACertificateStudent } from "../../ICertificate.student";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CertificatesInMemory implements ACertificateStudent {
    private coursesModel__InMemory: Courses_Student[] = [
        {
            id:'123',
            completed:true,
            coursesId:'434',
            lastSeen:'10:00:00',
            studentCoursesId:'2727',
            createdAt:new Date(),
            updatedAt:new Date(),
        },
        {
            id:'132',
            completed:true,
            coursesId:'454',
            lastSeen:'10:00:00',
            studentCoursesId:'2727',
            createdAt:new Date(),
            updatedAt:new Date(),
        },
        {
            id:'234',
            completed:false,
            coursesId:'202',
            lastSeen:'10:00:00',
            studentCoursesId:'2727',
            createdAt:new Date(),
            updatedAt:new Date(),
        },
    ];
    private coursesProducer__InMemory: Courses_Producer[] = [
        {
            id:'434',
            name:'Javascript do zero ao fullstack',
            categorysTag:['T.I', 'Programação'],
            cretificate:true,
            description:'Teste de descrição',
            duration:'30h',
            producerId:'456',
            urlThumbCourse:'teste.com',
            createdAt:new Date(),
            updatedAt:new Date(),
        },
        {
            id:'454',
            name:'PhP do zero ao fullstack',
            categorysTag:['T.I', 'Programação'],
            cretificate:true,
            description:'Teste de descrição',
            duration:'30h',
            producerId:'476',
            urlThumbCourse:'teste.com.br',
            createdAt:new Date(),
            updatedAt:new Date(),
        },
    ];
    async isCompleted(data: IGetCertificatesDTO): Promise<Object> {
        const filtredFinaly = await this.coursesModel__InMemory.filter(e => e.completed == true && data.studentId == e.studentCoursesId);
        const sendThisCourses = filtredFinaly.map(val =>{
            return this.coursesProducer__InMemory.filter(e => e.id == val.coursesId);
        });
        return sendThisCourses;
    };
};