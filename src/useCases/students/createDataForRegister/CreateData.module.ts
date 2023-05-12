import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { CreateDataForStudentsController } from "./CreateData.controller";
import { PrismaService } from "src/database";
import { CreateDataForStudentsService } from "./CreateData.service";
import { CreateDataStudentImplementation } from "src/repositories/Student/implementations/CreateDataStudent.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";

@Module({
    imports: [],
    controllers: [CreateDataForStudentsController],
    providers: [
        PrismaService,
        CreateDataForStudentsService,
        CreateDataStudentImplementation,
        IsJwtMiddleware,
    ]    
})
export class CreateDataStudentModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
            .forRoutes('create/data/student')
    };
};
