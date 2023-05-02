import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { getDataFullStudentController } from "./FullStudent.controller";
import { PrismaService } from "src/database";
import { GetFullDataStudent } from "src/repositories/Student/implementations/FullDataStudent.service";
import { getDataAndValidateFullStudentService } from "./FullStudent.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";

@Module({
    imports: [],
    controllers: [getDataFullStudentController],
    providers: [
        PrismaService,
        GetFullDataStudent,
        getDataAndValidateFullStudentService,
        IsJwtMiddleware,
    ],
})
export class GetFullStudentDataModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
            .forRoutes('profile/student/all')
    };
};

