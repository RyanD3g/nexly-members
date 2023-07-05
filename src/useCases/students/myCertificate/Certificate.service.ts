import { CertificatesInMemory } from '../../../repositories/Student/implementations/in-memory-database/certificate.memory';
import { CertificatesImplementations } from '../../../repositories/Student/implementations/Certificate.service';
import { IGetCertificatesDTO } from './Certificate.DTO';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CertificateService {
    constructor(
        private inMemory:CertificatesInMemory,
        private implementation:CertificatesImplementations,
    ){};

    async getCoursesCompleted(data:IGetCertificatesDTO, isTest:boolean){
        if(isTest){
            const myCoursesCompleted = await this.inMemory.isCompleted(data);
            return myCoursesCompleted;
        };
        const myCoursesCompleted = await this.implementation.isCompleted(data);
        return myCoursesCompleted;
    };  
};
