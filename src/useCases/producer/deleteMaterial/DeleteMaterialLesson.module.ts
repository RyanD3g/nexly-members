import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { DeleteMaterialController } from "./DeleteMaterialLesson.controller";
import { PrismaService } from "src/database";
import { DeleteMaterialLessonImplementation } from "src/repositories/Producer/implementations/DeleteMaterial.service";
import { DeleteMaterialLessonInMemory } from "src/repositories/Producer/implementations/in-memory-database/deleteMaterial.memory";
import { DeleteMaterialService } from "./DeleteMaterialLesson.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { IsProducer } from "src/middlewares/isProducer.middleware";
import { isSigned } from "src/middlewares/isSigned.middleware";

@Module({
    imports: [],
    controllers: [DeleteMaterialController],
    providers:[
        PrismaService,
        DeleteMaterialLessonImplementation,
        DeleteMaterialLessonInMemory,
        DeleteMaterialService,
        IsJwtMiddleware,
        IsProducer,
        isSigned,
    ],
})
export class DeleteMaterialModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
       consumer
            .apply(
                IsJwtMiddleware,
                IsProducer,
                isSigned,
            )
                .forRoutes('delete/material');
    };
};
