import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ChangeTagsController } from "./ChangeTags.controller";
import { PrismaService } from "src/database";
import { ChangeTagImplementation } from "src/repositories/Student/implementations/ChangeTag.service";
import { ChangeTagsService } from "./ChangeTags.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";

@Module({
    imports: [],
    controllers: [ChangeTagsController],
    providers: [
        PrismaService,
        ChangeTagImplementation,
        ChangeTagsService,
        IsJwtMiddleware,
    ],
})
export class ChangeTagsModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
                .forRoutes('change/tags/student')
    };
};
