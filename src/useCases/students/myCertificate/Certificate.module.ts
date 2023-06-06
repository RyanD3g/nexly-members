import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { CertificateController } from "./Certificate.controller";
import { PrismaService } from "src/database";
import { CertificateService } from "./Certificate.service";
import { CertificatesImplementations } from "src/repositories/Student/implementations/Certificate.service";
import { CertificatesInMemory } from "src/repositories/Student/implementations/in-memory-database/certificate.memory";

@Module({
    imports: [],
    controllers: [CertificateController],
    providers: [
        PrismaService,
        CertificateService,
        CertificatesImplementations,
        CertificatesInMemory,
        IsJwtMiddleware,
    ],
})
export class CertificateModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
                .forRoutes('courses/completed')
    };
};
