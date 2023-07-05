import { Courses_Producer, Courses_Student } from "@prisma/client";
import { IGetCertificatesDTO } from "src/useCases/students/myCertificate/Certificate.DTO";

export abstract class ACertificateStudent {
    abstract isCompleted(data:IGetCertificatesDTO): Promise<Courses_Producer[][] | Object>;
};
