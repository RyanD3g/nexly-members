import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { DeleteAccountStudentController } from "./DeleteAccount.controller";
import { PrismaService } from "src/database";
import { DeleteAccountStudentService } from "./DeleteAccount.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { DeleteAccountStudentImplementation } from "src/repositories/Student/implementations/DeleteAccount.service";
import { DeleteAccountStudentInMemory } from "src/repositories/Student/implementations/in-memory-database/deleteAccount.memory";

@Module({
    imports: [],
    controllers: [DeleteAccountStudentController],
    providers:[
        PrismaService,
        DeleteAccountStudentImplementation,
        DeleteAccountStudentInMemory,
        DeleteAccountStudentService,
        IsJwtMiddleware,
    ],
})
export class DeleteAccountStudentModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(
                IsJwtMiddleware,
            )
                .forRoutes('delete/account/student');
    };
};
