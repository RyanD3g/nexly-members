import { Test } from "@nestjs/testing";
import { CertificateController } from "./Certificate.controller";
import { PrismaService } from "../../../database";
import { CertificateService } from "./Certificate.service";
import { CertificatesImplementations } from "../../../repositories/Student/implementations/Certificate.service";
import { CertificatesInMemory } from "../../../repositories/Student/implementations/in-memory-database/certificate.memory";

describe('Esses testes servem para ver se a funcionalidade de ver cursos completos estão OK', ()=>{
    let certificateController:CertificateController;
    beforeAll(async ()=>{
       const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [CertificateController],
            providers: [
                PrismaService,
                CertificateService,
                CertificatesImplementations,
                CertificatesInMemory,
            ],
       }).compile();
       certificateController = moduleRef.get<CertificateController>(CertificateController);
    });

    describe('Testando funcionalidades', ()=>{
        it('Deveria ver normalmente todos os cursos finalizados', async ()=>{
            const certificates = await certificateController.handle_getMyCourses({ studentId:'2727' }, true);
            expect(certificates).toHaveLength(2);
        });
    });
});