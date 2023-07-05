import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { CreateModuleController } from "./CreateModule.controller";
import { PrismaService } from "src/database";
import { CreateCourseImplementation } from "src/repositories/Producer/implementations/CreateCourse.service";
import { CreateModuleImplementation } from "src/repositories/Producer/implementations/CreateModule.service";
import { CreateModuleInMemory } from "src/repositories/Producer/implementations/in-memory-database/createModule.memory";
import { CreateModuleService } from "./CreateModule.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { IsProducer } from "src/middlewares/isProducer.middleware";
import { isSigned } from "src/middlewares/isSigned.middleware";

@Module({
    imports: [],
    controllers: [CreateModuleController],
    providers: [
        PrismaService,
        CreateModuleImplementation,
        CreateModuleInMemory,
        CreateModuleService,
        IsJwtMiddleware,
        IsProducer,
        isSigned,
    ],
})
export class CreateModuleCourseModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware, IsProducer, isSigned)
                .forRoutes('module/create/producer');
    };
};
