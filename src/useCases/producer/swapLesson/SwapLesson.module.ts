import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { SwapLessonController } from "./SwapLesson.Controller";
import { PrismaService } from "src/database";
import { SwapLessonImplementation } from "src/repositories/Producer/implementations/SwapLesson.service";
import { SwapLessonService } from "./SwapLesson.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { IsProducer } from "src/middlewares/isProducer.middleware";
import { isSigned } from "src/middlewares/isSigned.middleware";

@Module({
    imports: [],
    controllers: [SwapLessonController],
    providers: [
        PrismaService,
        SwapLessonImplementation,
        SwapLessonService,
        IsJwtMiddleware,
        IsProducer,
        isSigned,
    ],
})
export class SwapLessonModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
       consumer
        .apply(
            IsJwtMiddleware,
            IsProducer,
            isSigned,
        )
            .forRoutes('swap/lesson');
    };
};
