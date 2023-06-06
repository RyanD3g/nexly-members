import { IGetCertificatesDTO } from "../../../useCases/students/myCertificate/Certificate.DTO";
import { ACertificateStudent } from "../ICertificate.student";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../database";

@Injectable()
export class CertificatesImplementations implements ACertificateStudent {
    constructor(
        private prisma:PrismaService,
    ){};
    async isCompleted(data: IGetCertificatesDTO): Promise<Object> {
        const filtredFinaly = await this.prisma.courses_Student.findMany({
            where:{ completed:true, studentCoursesId:data.studentId },
        });

        const sendByThisCourses = filtredFinaly.map(async val =>{
            return await this.prisma.courses_Producer.findUnique({
                where:{ id:val.id },
            });
        });
        return { courses:sendByThisCourses };
    };
};
